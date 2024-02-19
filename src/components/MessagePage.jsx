import PropTypes from "prop-types";

import "../scss/MessagePage.scss";

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
