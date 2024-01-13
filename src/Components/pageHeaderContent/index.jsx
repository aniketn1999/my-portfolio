import './styles.scss';

const PageHeaderContent = (props) => {
  const { headerText } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      {/* <span>{icon}</span> */}
    </div>
  );
};


export default PageHeaderContent;