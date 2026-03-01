

const App = () => {
  return (
    <div className=" w-screen flex flex-col justify-between">
      <div className="h-[80vh]   bg-gray-400">asdfas</div>
      <div className="flex items-center gap-5 p-2">
        <input
          type="text"
          className="bg-white text-lg px-1 py-2 text-black w-full border"
          placeholder="Enter your message..."
        />
        <button className="bg-blue-400 text-2xl p-2 text-white rounded">Send</button>
      </div>
    </div>
  );
};

export default App;
