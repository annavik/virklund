import Fuse from "fuse.js";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { TextInput } from "../../components/TextInput/TextInput";
import {
  patterns,
  sortPatternsByDate,
  sortPatternsByName,
} from "../../patterns/patterns";
import { Pattern, Tag } from "../../patterns/types";
import { Card } from "./Card/Card";
import styles from "./PatternsPage.module.scss";

const filterTypes = [
  { id: "filter-all", label: "Alla mönster" },
  { id: "filter-pdf", label: "PDF" },
  { id: "filter-video", label: "Video" },
  { id: "filter-beginner", label: "Nybörjarvänligt" },
];

const sortTypes = [
  { id: "sort-date", label: "Datum" },
  { id: "sort-name", label: "Namn" },
];

export const PatternsPage = () => {
  const [patternList, setPatternList] = useState<Pattern[]>([]);
  const [searchString, setSearchString] = useState("");
  const [filterType, setFilterType] = useState(filterTypes[0].id);
  const [sortType, setSortType] = useState(sortTypes[0].id);

  const fuse = useMemo(
    () =>
      new Fuse(patterns, {
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
      }),
    []
  );

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
        case "filter-beginner":
          return pattern.tags.includes(Tag.Beginner);
        default:
          return true;
      }
    });

    switch (sortType) {
      case "sort-date":
        _patternList = sortPatternsByDate(_patternList);
        break;
      case "sort-name":
        _patternList = sortPatternsByName(_patternList);
        break;
    }

    setPatternList(_patternList);
  }, [searchString, sortType, filterType, fuse]);

  return (
    <div className={styles.Container}>
      <Spacer size={80} smallScreenSize={20} />
      <SectionTitle title="Mönster" />
      <Spacer size={30} smallScreenSize={0} />
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
            label="Sortering"
            items={sortTypes}
            selected={sortType}
            onSelect={setSortType}
          />
        </div>
      </div>
      <Spacer size={40} smallScreenSize={20} />
      {patternList.map((pattern, index) => (
        <React.Fragment key={pattern.id}>
          <Link to={`/patterns/${pattern.id}`} className={styles.CardLink}>
            <Card pattern={pattern} />
          </Link>
          {index < patternList.length - 1 && (
            <Spacer size={30} smallScreenSize={20} />
          )}
        </React.Fragment>
      ))}
      <Spacer size={80} smallScreenSize={0} />
    </div>
  );
};
