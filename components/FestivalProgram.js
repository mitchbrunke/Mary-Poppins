import Link from "next/link";
import styles from "../styles/Festival.module.scss";
import Image from "next/image";

const FestivalProgram = () => {
  return (
    <div className={styles.prog}>
      <h2>Festival Program</h2>
      <div className={styles.progCard}>
        <div className={styles.img}></div>
        <div className={styles.text}>
          <h4>The Mary Poppins Festival program is here! βοΈπ</h4>
          <p>
            Set over four days, festivalgoers can expect a stellar lineup of
            performances, entertainment and activities for the whole family. π¨βπ©βπ§βπ¦
          </p>

          <p>
            Day 1 begins at the renowned Maryborough Markets and includes a
            Basket Weaving Workshop at Gatakers Artspace and ticketed tours at
            Story Bank and Bond Store. π§Ά Day 2 includes ticketed tours at the
            unique Story Bank and Bond Store, along with entry into Gatakers
            Artspace. π¨ Day 3 includes a Recycled Materials Workshop at
            Gatakers Artspace, an incredible ticketed performance 'Charlotte's
            Web' at the Brolga Theatre. Again tours are available at Story Bank
            and the Bond Store. πΈοΈπ­ Day 4 β¨ DAY IN THE PARK β¨ highlights
            include the Chimney Sweep and Nanny Race Challenge, Best Dressed,
            Picnic in the Park, various Book Times, Trivia, Magic Workshop, art
            and music performances and much more!
          </p>
        </div>
      </div>

      <Link href="/program">
        <a>
          <button>VIEW FULL PROGRAM</button>
        </a>
      </Link>
    </div>
  );
};

export default FestivalProgram;
