import ConnectForm from "@/comps/Connect";

const Connect = () => {
  return (
    <>
      <div className="connectContainer">
        <div className="textConnectContainer">
          <h1 className="text-6xl italic font-medium">
            Con<span className="text-green-col">nect</span>
          </h1>
          <p className="text-xm">
            Hey there! You can now connect with your loved ones via
            decentralised chat.
          </p>
        </div>
        <ConnectForm />
      </div>
    </>
  );
};

export default Connect;
