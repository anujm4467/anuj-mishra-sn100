import fsPromises from 'fs/promises';
import path from 'path';
import { EZone, ICoordinates } from 'src/types/landing-zone.types';

export const getCoordinates = async (zone?: EZone): Promise<ICoordinates> => {
  if (!zone) {
    return {
      R1: [],
      R2: [],
    };
  }

  // Simulate api call
  const data = await fsPromises.readFile(
    path.join(__dirname, `../../assets/${zone}.json`),
  );

  const coordinates = JSON.parse(data.toString());

  return coordinates.data;
};
