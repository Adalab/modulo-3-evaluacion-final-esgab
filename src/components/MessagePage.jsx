import PropTypes from "prop-types";

function MessagePage(props) {

  return (
    <div className="message">
      <p className="message__text">{props.text}</p>
    </div>
  );

}

MessagePage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MessagePage;
