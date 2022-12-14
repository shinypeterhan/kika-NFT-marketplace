import PlayerItem from '../../components/card/PlayerItem';

const playRight = () => {
  return (
    <div className="container m-auto mb-[120px] play-right-back sm:justify-center flex bg-[url('/assets/images/right-now-background.png')] bg-no-repeat bg-bottom border">
      <div className="flex sm:text-center sm:flex-col 2xl:flex-row 2xl: flex mt-[150px]">
        <div className="ml-[80px] mt-[50px] lg:flex lg:justify-center 2xl:block">
          <div>
            <p className="font-drone bold text-yellow text-[80px]">PLAY</p>
            <p className="lg:pl-[20px] font-drone bold text-yellow text-[80px]">
              RIGHT
            </p>
            <p className="lg:pl-[20px] font-drone bold text-yellow text-[80px]">
              NOW
            </p>
            <div className="lg:flex-block">
              <button className="pt-1 pr-6 play-game-1 mt-4 pl-[20px]">
                PLAY GAME
              </button>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/person_7.png"
          alt="person_7.png"
          width="541px"
          className="sm:m-auto"
        />
        <div>
          <div className="flex text-white mx-[80px] justify-between">
            <div className="leading-6 font-medium font-drone text-base mx-[60px] my-[8px]">
              #
            </div>
            <div className="flex items-center">
              <div className="leading-6 font-medium font-drone text-base pl-2">
                PLAYER
              </div>
            </div>
            <div className="leading-6 font-medium text-base mx-[75px] my-[8px] flex font-drone">
              WINNINGS
            </div>
          </div>
          <PlayerItem
            id={1}
            player={'lid**********'}
            winnings={'19 466.92'}
            borderColor="#DA458F"
            avatarUrl={'/assets/images/avatar1.png'}
            opacity={100}
          />
          <PlayerItem
            id={2}
            player={'abc**********'}
            winnings={'19 466.92'}
            borderColor="#D6D6D6"
            avatarUrl={'/assets/images/avatar2.png'}
            opacity={75}
          />
          <PlayerItem
            id={3}
            player={'jon**********'}
            winnings={'19 466.92'}
            borderColor="#89888B"
            avatarUrl={'/assets/images/avatar3.png'}
            opacity={50}
          />
          <PlayerItem
            id={4}
            player={'won**********'}
            winnings={'19 466.92'}
            borderColor="#3A3841"
            avatarUrl={'/assets/images/avatar4.png'}
            opacity={25}
          />
        </div>
      </div>
    </div>
  );
};

export default playRight;
