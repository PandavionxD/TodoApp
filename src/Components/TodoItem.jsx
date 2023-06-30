export const TodoItem = ({ todo }) => {
  const { title, description, completed } = todo;

  return (
    <>
      <div className="card">
        <h3>  <span> <i className={`check fa-regular fa-circle-check  ${(completed) ? 'completed' : ""} `}></i> </span>   {title} </h3>
        <p> {description} </p>
        <span><i className="close fa-regular fa-circle-xmark"></i></span>
      </div>
    </>
  );
};
