import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../components/avatar";
import ChatBot from "../components/Chatbot";
import VoiceAssistant from "../components/Voiceassistant";
import Avatar3D from "../components/Avatar3D";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to our websit </h1>
      <div className="flex justify-center items-center h-screen bg-gray-900"></div>  
        <Avatar />
        <ChatBot />
        <VoiceAssistant />
      </div>
    </div>
  );
};


export default Home;
