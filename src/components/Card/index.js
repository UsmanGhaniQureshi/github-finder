const Card = ({ imageUrl, title, detail }) => {
  return (
    <div className="flex p-4  border-solid items-center border-8 rounded-xl">
      <div className="flex rounded-full w-20 h-20 border-4 items-center justify-center">
        <img src={imageUrl} className="rounded-full w-16 h-16 object-fill" />
      </div>
      <div className="p-4">
        <strong className="text-slate-600">{title}</strong>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Card;
