import classes from "../styles/Video.module.css";
import set from "../assets/images/set.png";
export default function Video({ title, id, noq}) {

  return (
    <div className={classes.video}>
      <img
        src={set}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>

      </div>
    </div>
  );
}
