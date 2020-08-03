export type ToCEntry = {
  readonly id?: string;
  readonly number: number;
  readonly title: string;
  readonly children?: readonly ToCEntry[];
};

export type ToC = readonly ToCEntry[];

export const toc: ToC = [
  {
    title: "Introduction",
    number: 0,
  },
  {
    title: "Scope",
    number: 1,
  },
  {
    title: "ECMAScript Language: Source Code",
    number: 10,
    children: [
      {
        number: 1,
        title: "Source Text",
        children: [
          {
            id: "2020.sec-utf16encoding",
            number: 1,
            title: "Static Semantics: UTF16Encoding ( cp )",
          },
        ],
      },
    ],
  },
];
