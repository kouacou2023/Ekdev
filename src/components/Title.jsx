export default function Title(props) {
  return (
    <div>
      <h1 className="inline-flex md:text-6xl md:mt-10 animate-text-gradient bg-gradient-to-r from-[#ededed] via-[#363636] to-[#f0f0f0] bg-[200%_auto] text-4xl text-transparent font-semibold bg-clip-text">
        {props.title}
      </h1>
    </div>
  );
}
