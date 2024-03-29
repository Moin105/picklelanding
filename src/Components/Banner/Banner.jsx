import styles from "./Banner.css"
import ContainerCard from '../ContainerCard/ContainerCard';
import BrickLayout from "../BrickLayout/BrickLayout";

const Banner = () => {
  return (
    <header className={`banner flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className="blur-circle-shape"></div>

          <BrickLayout />
          
          {/* <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Be one who change the world 😎🤘</h2>
            <h1 className={styles["heading-header-second-title"]}>
              Artists make The Arts better <br />
              The Arts design the <span>world</span> better
            </h1>
            
            <div className={`${styles["search-bar"]} flex align-items-center`}>
              <SearchNormal1 size="30" color="var(--white-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="Search who can change the world" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                <Setting4 size="20" color="var(--dark-900)"/>
              </button>
            </div>

            <HeaderBoxes titles_numbers={JsonHeader.informations} />
          </div> */}
        </ContainerCard>
    </header>
  )
}

export default Banner