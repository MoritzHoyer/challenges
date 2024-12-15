import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars); // useImmer anstelle von useState verwenden

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    updateCars((draft) => {
      const carToUpdate = draft.find((car) => car.emoji === clickedCar.emoji); // Finde das Auto
      carToUpdate.position.x += coveredDistance; // Erhöhe die Position
      carToUpdate.position.lastDistance = coveredDistance; // Setze die letzte Distanz
    });
  }

  // export default function CarRace() {
  //   const [cars, setCars] = useState(initialCars);

  //   function moveCar(clickedCar) {
  //     const coveredDistance = getRandomDistance(); // zufällige Distanz
  //     setCars((prevCars) =>
  //       prevCars.map((car) => {
  //         if (car.emoji === clickedCar.emoji) {
  //           // Suche nach dem geklickten Auto
  //           return {
  //             ...car, // Kopiere das Auto-Objekt
  //             position: {
  //               ...car.position, // Kopiere die Position des Autos
  //               x: car.position.x + coveredDistance, // Erhöhe die Position um die Distanz
  //               lastDistance: coveredDistance, // Setze die letzte Distanz
  //             },
  //           };
  //         }
  //         return car; // Unveränderte Autos zurückgeben
  //       })
  //     );
  //   }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
