import * as React from "react";
import { ChangeEvent, useState } from "react";
import CardHeader from "../../components/CardHeader/CardHeader";
import TextInput from "../../components/CardInput/Text/TextInput";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../data/store/index";
import { updateUserInformations } from "../../data/slices/user";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function () {
  const { user } = useSelector<RootState, any>(state => state.user);
  const [uploadedImg, setUploadedImg] = useState(user.avatar);
  const [ImgBlur, setImgBlur] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement> | any) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = e => {
      const uploadedImageUrl = e.target?.result as string;
      setUploadedImg(uploadedImageUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "too short !  ")
      .required("firstName not match"),
    lastName: Yup.string()
      .min(2, "too short !  ")
      .required("firstName not match"),
    email: Yup.string().email().required("email not valid"),
  });
  const [selectedOption, setSelectedOption] = useState("GitHub");
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    onSubmit: async (values: any) => {
      console.log(values, selectedOption, "values");
      const newValues = {
        ...values,
        avatar: uploadedImg,
      };
      dispatch(updateUserInformations(newValues));
    },
    validationSchema: schema,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div className="Card__content Profile">
      <CardHeader
        title={"Profile Details"}
        subtitle={
          "Add your details to create a personell touch to your profile"
        }
      />
      <div className="Scroll__container">
        <div className="Profile__Element ImgPart">
          <p>Profile picture</p>
          <div
            className="Profile__Element__ImgPicker"
            onMouseEnter={() => setImgBlur(true)}
            onMouseLeave={() => setImgBlur(false)}>
            {uploadedImg ? <img src={uploadedImg} alt="" /> : null}
            {!uploadedImg || ImgBlur ? (
              <div className="Profile__Element__ImgPicker__blur">
                <UploadIcon />
                <p>Change image</p>
              </div>
            ) : null}
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <p>
            Image must be below 1024 * 1024px <br /> UsePng,JPG or Bmp format
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Profile__Element">
            <TextInput
              label={"First name"}
              value={formik.values.firstName}
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <TextInput
              label={"Last name"}
              value={formik.values.lastName}
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={undefined}
            />
            <TextInput
              label={"Email"}
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={undefined}
            />
          </div>
          <div className="Profile__Btn">
            <button type="submit" className="Profile__SaveBtn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
