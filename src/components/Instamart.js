import { useState } from "react";

const Section = ({ title, description, isVisible }) => {
  return (
    <div className="border-black p-2 m-2 border-2">
      <h2 className="font-bold text-xl">{title}</h2>
      {isVisible ? (
        <button
          type="button"
          className="bg-green-500 p-1 m-1 text-white border-green-800 border-1 rounded-md"
        >
          Show
        </button>
      ) : (
        <>
          <p>{description}</p>

          <button
            type="button"
            className="bg-red-500 p-1 m-1 text-white border-red-700-800 border-1 rounded-md"
          >
            Hide
          </button>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  //const [visibleSection,setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-2">InstaMart</h1>
      <Section
        title={"About InstaMart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        // isVisible={visibleSection==="about"}
      />
      <Section
        title={"Career InstaMart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        // isVisible={visibleSection==="career"}
      />
      <Section
        title={"Contact InstaMart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        // isVisible={visibleSection==="contact"}
      />
    </div>
  );
};
export default Instamart;
