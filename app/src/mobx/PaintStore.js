import { observable, action, computed } from "mobx";
import { AsyncStorage } from "react-native";

export default class PaintStore {
  // attributes
  @observable pointAnimals = [
    {
      id: 0,
      name: "policeman1",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
        { number: 46, listData: [], path: [] },
        { number: 47, listData: [], path: [] },
        { number: 48, listData: [], path: [] },
        { number: 49, listData: [], path: [] },
        { number: 50, listData: [], path: [] },
        { number: 51, listData: [], path: [] },
        { number: 52, listData: [], path: [] },
        { number: 53, listData: [], path: [] },
        { number: 54, listData: [], path: [] },
        { number: 55, listData: [], path: [] },
        { number: 56, listData: [], path: [] },
        { number: 57, listData: [], path: [] },
        { number: 58, listData: [], path: [] },
        { number: 59, listData: [], path: [] },
        { number: 60, listData: [], path: [] },
        { number: 61, listData: [], path: [] },
      ],
    },
    {
      id: 1,
      name: "policeman2",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
      ],
    },
    {
      id: 2,
      name: "policeman3",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
      ],
    },
    {
      id: 3,
      name: "policeman4",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
      ],
    },
    {
      id: 4,
      name: "policeman5",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
      ],
    },
    {
      id: 5,
      name: "policeman6",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
      ],
    },
  ];

  @observable pointObjects = [
    {
      id: 0,
      name: "fireman1",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
      ],
    },
    {
      id: 1,
      name: "fireman2",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
      ],
    },
    {
      id: 2,
      name: "fireman3",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
        { number: 46, listData: [], path: [] },
        { number: 47, listData: [], path: [] },
        { number: 48, listData: [], path: [] },
        { number: 49, listData: [], path: [] },
        { number: 50, listData: [], path: [] },
      ],
    },
    {
      id: 3,
      name: "fireman4",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
      ],
    },
    {
      id: 4,
      name: "fireman5",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
        { number: 46, listData: [], path: [] },
        { number: 47, listData: [], path: [] },
        { number: 48, listData: [], path: [] },
        { number: 49, listData: [], path: [] },
        { number: 50, listData: [], path: [] },
        { number: 51, listData: [], path: [] },
        { number: 52, listData: [], path: [] },
        { number: 53, listData: [], path: [] },
        { number: 54, listData: [], path: [] },
        { number: 55, listData: [], path: [] },
        { number: 56, listData: [], path: [] },
      ],
    },
    {
      id: 5,
      name: "fireman6",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
      ],
    },
    {
      id: 6,
      name: "constructionman1",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
      ],
    },
    {
      id: 7,
      name: "constructionman2",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
      ],
    },
    {
      id: 8,
      name: "constructionman3",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
      ],
    },
    {
      id: 9,
      name: "constructionman4",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
      ],
    },
    {
      id: 10,
      name: "constructionman5",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
      ],
    },
    {
      id: 11,
      name: "constructionman6",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
      ],
    },
    {
      id: 12,
      name: "constructionman7",
      point: [
        { number: 1, listData: [], path: [] },
        { number: 2, listData: [], path: [] },
        { number: 3, listData: [], path: [] },
        { number: 4, listData: [], path: [] },
        { number: 5, listData: [], path: [] },
        { number: 6, listData: [], path: [] },
        { number: 7, listData: [], path: [] },
        { number: 8, listData: [], path: [] },
        { number: 9, listData: [], path: [] },
        { number: 10, listData: [], path: [] },
        { number: 11, listData: [], path: [] },
        { number: 12, listData: [], path: [] },
        { number: 13, listData: [], path: [] },
        { number: 14, listData: [], path: [] },
        { number: 15, listData: [], path: [] },
        { number: 16, listData: [], path: [] },
        { number: 17, listData: [], path: [] },
        { number: 18, listData: [], path: [] },
        { number: 19, listData: [], path: [] },
        { number: 20, listData: [], path: [] },
        { number: 21, listData: [], path: [] },
        { number: 22, listData: [], path: [] },
        { number: 23, listData: [], path: [] },
        { number: 24, listData: [], path: [] },
        { number: 25, listData: [], path: [] },
        { number: 26, listData: [], path: [] },
        { number: 27, listData: [], path: [] },
        { number: 28, listData: [], path: [] },
        { number: 29, listData: [], path: [] },
        { number: 30, listData: [], path: [] },
        { number: 31, listData: [], path: [] },
        { number: 32, listData: [], path: [] },
        { number: 33, listData: [], path: [] },
        { number: 34, listData: [], path: [] },
        { number: 35, listData: [], path: [] },
        { number: 36, listData: [], path: [] },
        { number: 37, listData: [], path: [] },
        { number: 38, listData: [], path: [] },
        { number: 39, listData: [], path: [] },
        { number: 40, listData: [], path: [] },
        { number: 41, listData: [], path: [] },
        { number: 42, listData: [], path: [] },
        { number: 43, listData: [], path: [] },
        { number: 44, listData: [], path: [] },
        { number: 45, listData: [], path: [] },
        { number: 46, listData: [], path: [] },
        { number: 47, listData: [], path: [] },
        { number: 48, listData: [], path: [] },
        { number: 49, listData: [], path: [] },
        { number: 50, listData: [], path: [] },
      ],
    },
  ];

  @observable paintedList = [];

  @observable posX = "0";
  @observable posY = "0";

  @observable _X = "0";
  @observable _Y = "0";

  @observable strokeColor = 8;

  @observable strokeOpacity = 0.4;
  @observable strokeLinejoin = "round";
  @observable strokeLinecap = "round";
  @observable strokeDasharrayS = 0;
  @observable strokeDasharrayG = 0;

  @observable color = "#7FC325";

  @observable colorPen = [
    { number: 1, isColor: true },
    { number: 2, isColor: false },
    { number: 3, isColor: false },
    { number: 4, isColor: false },
    { number: 5, isColor: false },
    { number: 6, isColor: false },
    { number: 7, isColor: false },
    { number: 8, isColor: false },
    { number: 9, isColor: false },
    { number: 10, isColor: false },
    { number: 11, isColor: false },
    { number: 12, isColor: false },
    { number: 13, isColor: false },
    { number: 14, isColor: false },
    { number: 15, isColor: false },
    { number: 16, isColor: false },
    { number: 17, isColor: false },
    { number: 18, isColor: false },
    { number: 19, isColor: false },
    { number: 20, isColor: false },
    { number: 21, isColor: false },
    { number: 22, isColor: false },
  ];

  @observable selectPen = [
    { number: 1, isSelect: false },
    { number: 2, isSelect: false },
    { number: 3, isSelect: true },
    { number: 4, isSelect: false },
    { number: 5, isSelect: false },
  ];

  @observable page = 0;

  @observable numberScale = 0.5;

  @observable pNumber = 8;

  @observable numberPath = 0.125;

  @action setPage(index) {
    this.page = index;
  }

  @action setIsRefresh(isRefresh) {
    this.isRefresh = isRefresh;
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setStrokeOpacity(strokeOpacity) {
    this.strokeOpacity = strokeOpacity;
  }
  @action setStrokeLinejoin(strokeLinejoin) {
    this.strokeLinejoin = strokeLinejoin;
  }
  @action setStrokeLinecap(strokeLinecap) {
    this.strokeLinecap = strokeLinecap;
  }
  @action setStrokeDasharrayS(strokeDasharrayS) {
    this.strokeDasharrayS = strokeDasharrayS;
  }
  @action setStrokeDasharrayG(strokeDasharrayG) {
    this.strokeDasharrayG = strokeDasharrayG;
  }

  @action setPNumber(pNumber) {
    this.pNumber = pNumber;
    this.numberPath = 1.0 / pNumber;
  }

  // reset

  @action resetPosX() {
    this.posX = "";
  }
  @action resetPosY() {
    this.posY = "";
  }
  @action reset_X() {
    this._X = "";
  }
  @action reset_Y() {
    this._Y = "";
  }
  @action resetStrokeColor() {
    this.strokeColor = 10;
  }

  @action resetColorPen() {
    this.colorPen = [
      { number: 1, isColor: true },
      { number: 2, isColor: false },
      { number: 3, isColor: false },
      { number: 4, isColor: false },
      { number: 5, isColor: false },
      { number: 6, isColor: false },
      { number: 7, isColor: false },
      { number: 8, isColor: false },
      { number: 9, isColor: false },
      { number: 10, isColor: false },
      { number: 11, isColor: false },
      { number: 12, isColor: false },
    ];
  }

  @action resetSelectPen() {
    this.colorPen = [
      { number: 1, isSelect: true },
      { number: 2, isSelect: false },
      { number: 3, isSelect: false },
      { number: 4, isSelect: false },
      { number: 5, isSelect: false },
    ];
  }

  // action/method
  @action addPaintedList(paint, name) {
    let index = this.paintedList.findIndex((item) => item.name == name);

    if (index == -1) {
      let data = { paint: paint, name: name };

      this.paintedList.unshift(data);
    } else {
      this.paintedList.splice(index, 1);

      let data = { paint: paint, name: name };
      this.paintedList.unshift(data);
    }
  }

  @action removePaintedList(name) {
    let index = this.paintedList.findIndex((item) => item.name == name);

    if (index != -1) {
      this.paintedList.splice(index, 1);
    }
  }

  @action setColorPen(nSelect) {
    const indexReset = this.colorPen.findIndex((item) => item.isColor == true);

    this.colorPen[indexReset].isColor = false;
    this.colorPen[nSelect].isColor = true;
  }

  @action getColorPen(nSelect) {
    return this.colorPen[nSelect];
  }

  @action getColorPenIsTrue() {
    return this.colorPen.findIndex((item) => item.isColor == true);
  }

  @action setSelectPen(nSelect) {
    const indexReset = this.selectPen.findIndex(
      (item) => item.isSelect == true
    );

    this.selectPen[indexReset].isSelect = false;
    this.selectPen[nSelect].isSelect = true;
  }

  @action getSelectPen(nSelect) {
    return this.selectPen[nSelect];
  }

  @action getNumberSelectPen() {
    const indexReset = this.selectPen.findIndex(
      (item) => item.isSelect == true
    );
    return this.selectPen[indexReset].number;
  }

  @action resetAnimals(name) {
    // console.log(name, "nama");
    const indexAnimal = this.pointAnimals.findIndex(
      (item) => item.name == name
    );

    this.pointAnimals[indexAnimal].point.map((item, index) => {
      item.listData = [];
    });
  }

  @action resetObjects(name) {
    const indexObject = this.pointObjects.findIndex(
      (item) => item.name == name
    );

    this.pointObjects[indexObject].point.map((item, index) => {
      item.listData = [];
    });
  }

  @action resetPathAnimals(number, name) {
    const indexAnimal = this.pointAnimals.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(
      (p) => p.number == number
    );
    this.pointAnimals[indexAnimal].point[indexPoint].path = [];
  }

  @action resetPathObjects(number, name) {
    const indexObject = this.pointObjects.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointObjects[indexObject].point.findIndex(
      (p) => p.number == number
    );
    this.pointObjects[indexObject].point[indexPoint].path = [];
  }

  @action addPathAnimals(data, number, name) {
    const indexAnimal = this.pointAnimals.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(
      (p) => p.number == number
    );
    this.pointAnimals[indexAnimal].point[indexPoint].path.push(data);
  }

  @action addPathObjects(data, number, name) {
    const indexObject = this.pointObjects.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointObjects[indexObject].point.findIndex(
      (p) => p.number == number
    );
    this.pointObjects[indexObject].point[indexPoint].path.push(data);
  }

  @action addPointAnimals(data, number, name) {
    const indexAnimal = this.pointAnimals.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(
      (p) => p.number == number
    );
    this.pointAnimals[indexAnimal].point[indexPoint].listData.push(data);
  }

  @action addPointObjects(data, number, name) {
    const indexObject = this.pointObjects.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointObjects[indexObject].point.findIndex(
      (p) => p.number == number
    );
    this.pointObjects[indexObject].point[indexPoint].listData.push(data);
  }

  @action setLastPointAnimals(data, number, name) {
    const indexAnimal = this.pointAnimals.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(
      (p) => p.number == number
    );
    const count =
      this.pointAnimals[indexAnimal].point[indexPoint].listData.length - 1;
    this.pointAnimals[indexAnimal].point[indexPoint].listData[count].data +=
      data;
  }

  @action setLastPointObjects(data, number, name) {
    const indexObject = this.pointObjects.findIndex(
      (item) => item.name == name
    );
    const indexPoint = this.pointObjects[indexObject].point.findIndex(
      (p) => p.number == number
    );
    const count =
      this.pointObjects[indexObject].point[indexPoint].listData.length - 1;
    this.pointObjects[indexObject].point[indexPoint].listData[count].data +=
      data;
  }

  @action getPointStoreAnimals(number, name) {
    try {
      const indexAnimal = this.pointAnimals.findIndex(
        (item) => item.name == name
      );
      const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(
        (p) => p.number == number
      );
      return this.pointAnimals[indexAnimal].point[indexPoint];
    } catch {
      return null;
    }
  }

  @action getPointStoreObjects(number, name) {
    try {
      const indexObject = this.pointObjects.findIndex(
        (item) => item.name == name
      );
      const indexPoint = this.pointObjects[indexObject].point.findIndex(
        (p) => p.number == number
      );
      return this.pointObjects[indexObject].point[indexPoint];
    } catch {
      return null;
    }
  }

  @action setPosX(posX) {
    this.posX = posX;
  }
  @action setPosY(posY) {
    this.posY = posY;
  }
  @action set_X(_X) {
    this._X = _X;
  }
  @action set_Y(_Y) {
    this._Y = _Y;
  }
  @action setStrokeColor(strokeColor) {
    this.strokeColor = strokeColor;
  }

  // AsyncStore
  // @action getListDataStore(keyName) {
  //   AsyncStorage.getItem(keyName, (err, result) => {
  //     console.log(JSON.parse(result).listDataStore.length);
  //     return JSON.parse(result).listDataStore;
  //   });
  // }
}
