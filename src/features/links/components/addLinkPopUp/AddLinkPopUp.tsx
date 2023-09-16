import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkInput from "../../../../components/CardInput/Link/Link";
import Select from "../../../../components/CardInput/Select/Select";
import { hideModal } from "../../../../data/slices/modals";
import { AppDispatch, RootState } from "../../../../data/store/index";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { addUserLink } from "../../../../data/slices/user";
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/error.svg";
export default function AddLinkPopUp() {
  const dispatch = useDispatch<AppDispatch>();
  const schema = Yup.object().shape({
    url: Yup.string().min(2, "too short !  ").required("link"),
  });
  const [selectedOption, setSelectedOption] = useState("GitHub");
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useSelector<RootState, any>((state) => state.user);
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: async (values: any) => {
      console.log(values, selectedOption, "values");
      const links = user.links.filter(
        (ele: { origin: string }) => ele.origin === selectedOption
      );
      if (links.length === 0) {
        dispatch(addUserLink({ url: values.url, origin: selectedOption }))
        dispatch(hideModal())

      } else {
        setErrorMessage("Link already added");
        setTimeout(() => setErrorMessage(""), 2000);
      }
    },
    validationSchema: schema,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="ModalContainer">
      <div
        className="ModalContainer__Background"
        onClick={() => dispatch(hideModal())}
      ></div>
      <div className="ModalContainer__popUp">
        <form onSubmit={handleSubmit}>
          <p className="ModalContainer__popUp__title">Add new link</p>
          {errorMessage && (
            <div className="ModalContainer__popUp__errors">
              <ErrorIcon /> {errorMessage}
            </div>
          )}
          <LinkInput
            label={"link"}
            value={formik.values.url}
            // error={formik.touched.url && formik.errors.url}
            name="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Select
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className="ModalContainer__popUp__buttons">
            <button
              className="ModalContainer__popUp__buttons__btn cancel"
              onClick={() => dispatch(hideModal())}
              type="reset"
            >
              Cancel
            </button>
            <button
              className="ModalContainer__popUp__buttons__btn save"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
