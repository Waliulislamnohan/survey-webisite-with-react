import { useMemo } from "react";
import successImage from "../assets/images/thanku.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 10) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 50) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;
  const { currentUser} = useAuth()

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
          <div > 
            <h2>{currentUser.displayName}'s Results:</h2>

            <ul>
                  <li>
                      <p className={classes.score}>
                      Number of questions {noq}
                      </p> 
                  </li>
                  <li>
                    <p className={classes.score}>
                    Number of correct answers {score/5}
                    </p>   
                  </li>
                  <li>
                    <p className={classes.score}>
                    correct answers {(score / (noq * 5)) * 100} %
                    </p>

                  </li>
                  <li>
                    <p className={classes.score}>
                    Average of difficulty rating {(100-(score / (noq * 5)) * 100)}%
                    </p>
                  </li>
            </ul>

          </div>
        
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image }alt="Success" />
        </div>
      )}
    </div>
  );
}
