import "./SendMail.css";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
function SendMail() {
  //we are using a react hook to modify Form
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("test", { required: true })} //this is registering this element to the React form hook
          name="to"
          placeholder="To"
          type="text"
        />
        <input name="subject" placeholder="Subject" type="text" />
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
