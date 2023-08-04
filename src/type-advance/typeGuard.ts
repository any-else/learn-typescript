export const learnTypeAdvance = () => {
  interface IHome {
    name: string;
    address: string;
    price: number;
  }

  const vinHome: IHome = {
    name: "Vinhome",
    address: "Ha Noi",
    price: 10,
  };

  const age: number = 18;
  console.log("home", typeof vinHome);
  console.log("age", typeof age);
};
