import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { TextInput } from "../../components/TextInput/TextInput";
import { Card } from "./Card/Card";
import { patterns } from "./data/patterns";
import { Pattern, Tag } from "./data/types";
import styles from "./Patterns.module.scss";

const filterTypes = [
  { id: "filter-all", label: "Visa alla" },
  { id: "filter-pdf", label: "PDF" },
  { id: "filter-video", label: "YouTube" },
  { id: "filter-print", label: "Utskrift" },
];

const sortTypes = [
  { id: "sort-date", label: "Datum" },
  { id: "sort-name", label: "Namn" },
];

export const Patterns = () => {
  const [patternList, setPatternList] = useState<Pattern[]>([]);
  const [searchString, setSearchString] = useState("");
  const [filterType, setFilterType] = useState(filterTypes[0].id);
  const [sortType, setSortType] = useState(sortTypes[0].id);

  const fuse = new Fuse(patterns, {
    keys: [
      {
        name: "title",
        weight: 1,
      },
      {
        name: "description",
        weight: 2,
      },
    ],
    threshold: 0.5,
    shouldSort: false,
  });

  useEffect(() => {
    let _patternList =
      searchString.length > 1
        ? fuse.search(searchString).map(({ item }) => item)
        : patterns;

    _patternList = _patternList.filter((pattern) => {
      switch (filterType) {
        case "filter-pdf":
          return pattern.tags.includes(Tag.PDF);
        case "filter-video":
          return pattern.tags.includes(Tag.Video);
        case "filter-print":
          return pattern.tags.includes(Tag.Print);
        default:
          return true;
      }
    });

    _patternList = _patternList.sort((a, b) => {
      switch (sortType) {
        case "sort-date":
          return a.date < b.date ? 1 : -1;
        case "sort-name":
          return a.title > b.title ? 1 : -1;
        default:
          return 0;
      }
    });

    setPatternList(_patternList);
  }, [searchString, sortType, filterType]);

  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <SectionTitle title="Mönster" />
      <Spacer size={30} />
      <div className={styles.Controls}>
        <div style={{ flex: 2 }}>
          <TextInput
            label="Sök"
            value={searchString}
            onChange={setSearchString}
          />
        </div>
        <Spacer size={20} />
        <div style={{ flex: 1 }}>
          <Dropdown
            label="Typ"
            items={filterTypes}
            selected={filterType}
            onSelect={setFilterType}
          />
        </div>
        <Spacer size={20} />
        <div style={{ flex: 1 }}>
          <Dropdown
            label="Sortera efter"
            items={sortTypes}
            selected={sortType}
            onSelect={setSortType}
          />
        </div>
      </div>
      <Spacer size={40} />
      {patternList.map((pattern) => (
        <React.Fragment key={pattern.id}>
          <Card pattern={pattern} />
          <Spacer size={30} />
        </React.Fragment>
      ))}
      <Spacer size={80} />
    </div>
  );
};
