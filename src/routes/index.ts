import { Router } from 'express';
import { drone, ship } from 'src/utils/constants';
import landingZone from './landing-zone.routes';
import pathFind from './path-find.routes';

const router = Router();

// Home route
router.get('/', (req, res) => {
  res.send(
    `Greetings, underpaid employee!

SpaceY is on a mission to get ahead of SpaceX, not just in name, but in exploring and understanding Mars.

As such, our dear company is sending ${ship} to Mars with drone model ${drone}. Your team is working on an REST API interface for ${drone} to communicate with. The purpose of this interface is to give enough data to ${drone} so it can navigate when ${ship} lands on Mars.

Your mission, as you have no choice but to accept it since I'm paying you, is to make sure that the API sends and receives the correct data to make sure that our mission is a success and I can finally get ahead of my brother.

Head to the following endpoints to get started:
- /landing-zone
- /path-find

- Elton Musk (Elon Musk's younger, but smarter brother)`,
  );
});

// Other routes
router.use('/landing-zone', landingZone);
router.use('/path-find', pathFind);

export default router;
