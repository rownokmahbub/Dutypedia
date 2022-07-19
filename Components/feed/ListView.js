import ViewCard from "./ViewCard";

const ListView = ({
  views,
  className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4  gap-6",
}) => {
  return (
    <div className={className}>
      {views.map((view, index) => (
        <ViewCard key={index} view={view} />
      ))}
    </div>
  );
};

export default ListView;
