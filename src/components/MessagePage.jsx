import PropTypes from "prop-types";

function MessagePage(props) {

  return <p>{props.text}</p>;

}

MessagePage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MessagePage;
