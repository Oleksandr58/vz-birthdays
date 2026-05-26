import dayjs from "dayjs";

const BIRTHDAYS = [
  // {
  //   name: "Мазда",
  //   date: "07.10.1969",
  //   url: "mazda.jpg",
  // },
  {
    name: "Чечен",
    date: "22.11.1985",
    url: "",
  },
  {
    name: "Пріма",
    date: "01.08.1978",
    url: "",
  },
  {
    name: "Марічка",
    date: "19.10.1970",
    url: "marichka.jpg",
  },
  {
    name: "Доцент",
    date: "06.02.1973",
    url: "docent.jpg",
  },
  {
    name: "Рай",
    date: "13.04.2000",
    url: "rai.jpg",
  },
  {
    name: "Шархан",
    date: "21.03.1998",
    url: "sharhan.jpg",
  },
  {
    name: "Сухий",
    date: "25.02.1972",
    url: "suhii.jpg",
  },
  {
    name: "Барні",
    date: "09.02.1996",
    url: "barni.jpg",
  },
  {
    name: "Татарин",
    date: "08.02.1989",
    url: "tatarin.jpg",
  },
  {
    name: "Будьоний",
    date: "25.04.1998",
    url: "budionii.jpg",
  },
  {
    name: "Кампот",
    date: "16.05.1971",
    url: "kampot.jpg",
  },
  {
    name: "Філін",
    date: "18.07.1984",
    url: "filin.jpg",
  },
  {
    name: "Пекло",
    date: "25.01.1989",
    url: "peklo.jpg",
  },
  {
    name: "Ботан",
    date: "04.08.1981",
    url: "botan.jpg",
  },
  {
    name: "Шпилька",
    date: "16.06.1983",
    url: "shpilka.jpg",
  },
  {
    name: "Туск",
    date: "15.05.1998",
    url: "tusk.jpg",
  },
  {
    name: "Дімас",
    date: "17.10.1998",
    url: "dimas.jpg",
  },
];

const today = dayjs();

const getNextBirthday = (dateStr: string) => {
  const [day, month] = dateStr.split(".").map(Number);
  let birthdayThisYear = dayjs(
    `${today.year()}-${String(month).padStart(2, "0")}-${String(day).padStart(
      2,
      "0",
    )}`,
  );

  if (birthdayThisYear.isBefore(today, "day")) {
    birthdayThisYear = birthdayThisYear.add(1, "year");
  }

  return birthdayThisYear;
};

const sortedBirthdays = [...BIRTHDAYS].sort((a, b) => {
  const nextA = getNextBirthday(a.date);
  const nextB = getNextBirthday(b.date);

  return nextA.diff(today) - nextB.diff(today);
});

export default sortedBirthdays;
