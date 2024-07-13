import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCrown, FaGem, FaStar } from "react-icons/fa";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement("#__next"); // Adjust this selector based on your app structure

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEmail("");
    setIsSubscribed(false);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      // Handle subscription logic here
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
    } else {
      alert("Please enter a valid email address");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 w-full py-14" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-gray-600"
            >
              Let's choose the package that is best for you and explore it happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl py-6 px-8 lg:px-12 xl:px-16"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="text-blue-500 text-6xl mt-6 lg:mt-12">
                  <FaStar />
                </div>
                <p className="text-lg text-gray-800 font-medium capitalize my-4 sm:my-7">
                  Free Plan
                </p>
                <ul className="flex flex-col list-inside items-start justify-start text-left text-gray-600 flex-grow space-y-2">
                  <li className="relative check custom-list my-2">One landlord account</li>
                  <li className="relative check custom-list my-2">Manage max 2 properties</li>
                  <li className="relative check custom-list my-2">Accommodate 4 tenants</li>
                  <li className="relative check custom-list my-2">Rent settlement</li>
                  <li className="relative check custom-list my-2">Lease Termination</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-gray-800 text-center mb-4">Free</p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl py-6 px-8 lg:px-12 xl:px-16"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="text-purple-500 text-6xl mt-6 lg:mt-12">
                  <FaGem />
                </div>
                <p className="text-lg text-gray-800 font-medium capitalize my-4 sm:my-7">
                  Standard Plan
                </p>
                <ul className="flex flex-col list-inside items-start justify-start text-left text-gray-600 flex-grow space-y-2">
                  <li className="relative check custom-list my-2">Max 1 landlord and 4 collaborator accounts</li>
                  <li className="relative check custom-list my-2">Unlimited number of tenants</li>
                  <li className="relative check custom-list my-2">Full lease, rent, tenants, and property management</li>
                  <li className="relative check custom-list my-2">Account and Analytics</li>
                  <li className="relative check custom-list my-2">Monthly auto report generation</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-gray-800 text-center mb-4">
                    RWF 9000 <span className="text-gray-600">/ mo</span>
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl py-6 px-8 lg:px-12 xl:px-16"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="text-yellow-500 text-6xl mt-6 lg:mt-12">
                  <FaCrown />
                </div>
                <p className="text-lg text-gray-800 font-medium capitalize my-4 sm:my-7">
                  Premium Plan
                </p>
                <ul className="flex flex-col list-inside items-start justify-start text-left text-gray-600 flex-grow space-y-2">
                  <li className="relative check custom-list my-2">Unlimited number of tenants</li>
                  <li className="relative check custom-list my-2">Full lease, rent, tenants, and property management</li>
                  <li className="relative check custom-list my-2">Account and Analytics</li>
                  <li className="relative check custom-list my-2">Monthly auto report generation</li>
                  <li className="relative check custom-list my-2">Self on-premise hosting</li>
                  <li className="relative check custom-list my-2">Custom branding</li>
                  <li className="relative check custom-list my-2">24/7 Technical support</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-gray-800 text-center mb-4">
                    RWF 12000 <span className="text-gray-600">/ mo</span>
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-2xl font-medium text-gray-800 leading-normal w-9/12 sm:w-7/12 lg:w-6/12 mx-auto"
            >
              Trusted by Thousands of Happy Customers
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12 text-gray-600"
            >
              These are the stories of our customers who have joined us with great pleasure when using this amazing feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white shadow-lg">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-gray-800 text-xl sm:text-2xl lg:text-2xl leading-relaxed font-medium">
                    Subscribe Now for  Get Special Features!
                  </h5>
                  <p className="text-gray-600">Let's keep you update.</p>
                </div>
                <ButtonPrimary onClick={openModal}>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-gray-500 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
          <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
            <FaTimes size={24} />
          </button>
          {isSubscribed ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
              <p className="text-gray-600">You have successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <div className="flex justify-center">
                <ButtonPrimary onClick={handleSubscribe}>Subscribe</ButtonPrimary>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Pricing;
