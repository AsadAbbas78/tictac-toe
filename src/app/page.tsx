import TicTacToe from "./components/TicTacToe";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Tic Tac Toe</h1>
      < TicTacToe />
    </div>
  );
};

export default Home;
