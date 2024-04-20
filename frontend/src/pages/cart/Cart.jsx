import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { ColorlibConnector, ColorlibStepIcon } from "./Child/StepperComp";
import { Typography } from "@mui/material";
import { products } from "./Child/ProductDataBase";
import apiInstance from "@/services/apiService";
import { removeAll, removeCart } from "../../redux/slice/cartSlice";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Unstable_Grid2";

import { setAuthenticating } from "@/redux/actions/miscActions";
import Step1 from "./Child/Step1";
import Step2 from "./Child/Step2";
import Step3 from "./Child/Step3";
// import mock_product from "@/mockdata/products";
// import { ProductGroup } from "@/components/product";

export default function CartForm() {
  const dispatch = useDispatch();
  const steps = ["Shopping Cart", "Checkout Detail", "Order Detail"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [productsList, setProducts] = React.useState([]);
  const [value, setValue] = React.useState("Normal Shipping");
  const [contactInfor, setContactInfor] = React.useState({
    firstName: "",
    lastName: "",
    phonenum: "",
    email: "",
  });
  // console.log(contactInfor)
  const [shippingAddress, setShippingAddress] = React.useState({
    street: "",
    country: "",
    town: "",
    state: "",
    zip: "",
  });
  // console.log(shippingAddress)
  const [payment, setPayment] = React.useState({
    method: "Pay By Cash",
    cardNum: "",
    expDate: "",
    cvc: "",
  });

  const subtotal =
    productsList?.length > 0
      ? productsList.reduce((sum, obj) => sum + obj.price * obj.quantity, 0)
      : 0;
  const total =
    productsList?.length > 0
      ? (
          subtotal +
          (value == "Normal Shipping"
            ? 9.99
            : value == "Express Shipping"
            ? 14.99
            : 0)
        ).toFixed(2)
      : 0;
  const [userData, setUserData] = useState([]);

  const currentUser = apiInstance.getCurrentUser();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await apiInstance.getUser(currentUser.email);

        setUserData(userData);
        setProducts(userData.cart);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    getUserData();
  }, []);

  //Contact Infor Function
  function handleFirstName(e) {
    setContactInfor({ ...contactInfor, firstName: e.target.value });
  }
  function handleLastName(e) {
    setContactInfor({ ...contactInfor, lastName: e.target.value });
  }
  function handlePhoneNum(e) {
    setContactInfor({ ...contactInfor, phoneNum: e.target.value });
  }
  function handleEmail(e) {
    setContactInfor({ ...contactInfor, email: e.target.value });
  }
  //Shipping Address Function
  function handleShipping(e, comp) {
    setShippingAddress({ ...shippingAddress, [comp]: e.target.value });
  }
  // Payment Function
  function handlePayment(e, comp) {
    setPayment({ ...payment, [comp]: e.target.value });
  }
  //
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //Stepper function
  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleDeleteFromCart = async (id) => {
    try {
      await apiInstance.deleteFromCart(userData.email, id);
      setProducts(productsList.filter((product) => product.product_id !== id));
      dispatch(removeCart({ product_id: id }));
    } catch (error) {
      alert("Failed to delete product from cart.");
      console.error("Error deleting from cart:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await apiInstance.deleteAllFromCart(userData.email);
      setProducts([]);
      dispatch(removeAll());
    } catch (error) {
      alert("Failed to delete all product from cart.");
      console.error("Error deleting all from cart:", error);
    }
  };

  //call effect
  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
            marginTop="32px"
            marginBottom="32px"
          >
            {/* stepper */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ width: "60%", marginBottom: "50px" }}>
                <Stepper
                  // alternativeLabel
                  activeStep={activeStep}
                  // connector={<ColorlibConnector />}
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconComponent={ColorlibStepIcon}
                        onClick={handleStep(index)}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <React.Fragment>
                  {/* Change Step */}
                  {activeStep === 0 ? (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step1
                        productsList={productsList}
                        setProducts={setProducts}
                        total={total}
                        subtotal={subtotal}
                        value={value}
                        setValue={setValue}
                        handleNext={handleNext}
                        handleDeleteFromCart={handleDeleteFromCart}
                        handleDeleteAll={handleDeleteAll}
                      />
                    </Grid>
                  ) : activeStep === 1 ? (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step2
                        productsList={productsList}
                        setProducts={setProducts}
                        total={total}
                        subtotal={subtotal}
                        value={value}
                        setValue={setValue}
                        contactInfor={contactInfor}
                        handleFirstName={handleFirstName}
                        handleLastName={handleLastName}
                        handleEmail={handleEmail}
                        handlePhoneNum={handlePhoneNum}
                        shippingAddress={shippingAddress}
                        handleShipping={handleShipping}
                        payment={payment}
                        handlePayment={handlePayment}
                        handleNext={handleNext}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step3 total={total} method={payment.method} />
                    </Grid>
                  )}
                  {/* Back and Next Step */}
                  {/* <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        width: "80%",
                        margin: "auto",
                        marginTop: "30px",
                      }}
                    >
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        className="AddButton"
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {activeStep === 2 ? (
                        <Button
                          variant="contained"
                          className="AddButton"
                          // onClick={prop.preProcessing}
                        >
                          Finish
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          className="AddButton"
                          onClick={handleNext}
                          sx={{ mr: 1 }}
                        >
                          Next
                        </Button>
                      )}
                    </Box>
                  </Grid> */}
                </React.Fragment>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}
