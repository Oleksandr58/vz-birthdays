import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import BIRTHDAYS from "../data/birthdays";
import dayjs from "dayjs";

const getFullYears = (date: string) =>
  dayjs().diff(dayjs(date, "DD.MM.YYYY"), "year");
const getFullText = (date: string) => {
  const dateInDayjs = dayjs(date, "DD.MM.YYYY");
  const dateFormatted = dateInDayjs.format("(DD MMMM YYYY)");
  let dateInThisYear = dayjs(date, "DD.MM.YYYY").set("year", dayjs().year());
  const isPassedThisYear = dayjs().isAfter(dateInThisYear);

  if (isPassedThisYear) {
    dateInThisYear = dayjs(date, "DD.MM.YYYY").set("year", dayjs().year() + 1);
  }

  const isTheBirthday = dateInDayjs.format("DD.MM") === dayjs().format("DD.MM");

  if (isTheBirthday) {
    return `День народження сьогодні - святкуємо 🎉`;
  }

  const diffDays = dateInThisYear.diff(dayjs(), "day");

  if (diffDays) {
    return `через ${diffDays} днів ${dateFormatted}`;
  }

  return `День народження завтра - готуємося 🎉`;
};
const getYearText = (birhObj: { name: string; date: string }) => {
  const fullYear = getFullYears(birhObj.date);
  const isTheBirthday =
    dayjs(birhObj.date, "DD.MM.YYYY").format("DD.MM") ===
    dayjs().format("DD.MM");

  if (isTheBirthday) {
    return `${birhObj.name} (${fullYear} рочки)`;
  }

  return `${birhObj.name} (буде ${fullYear + 1} рочок)`;
};

export default function FolderList() {
  const sumYears = BIRTHDAYS.reduce((acc, birthObj) => {
    return acc + getFullYears(birthObj.date);
  }, 0);
  const mediumYears = Math.round((10 * sumYears) / BIRTHDAYS.length) / 10;

  return (
    <>
      <Typography textAlign="center" typography="h4">
        Дні народження <br /> ВЗ/ВРЕБ
      </Typography>
      <Typography textAlign="center" typography="h5">
        Середній вік - {mediumYears}
      </Typography>
      <List
        sx={{
          width: "100vw",
          m: "0 auto",
          bgcolor: "background.paper",
        }}
      >
        {BIRTHDAYS.map((birhObj, index) => (
          <ListItem
            sx={{
              maxWidth: "420px",
              margin: "0 auto",
              border: "1px solid black",
              background:
                index === 0
                  ? "rgba(255, 0, 0, 0.3)"
                  : index === 1
                    ? "rgba(255, 0, 0, 0.15)"
                    : 0,
            }}
          >
            <ListItemAvatar>
              <Avatar src={birhObj.url || "watermark.png"} />
            </ListItemAvatar>
            <ListItemText
              primary={getYearText(birhObj)}
              secondary={getFullText(birhObj.date)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
