import React, { useState } from "react";
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

export let name = "Basic";

export let Example = () => {
  let [value, setValue] = useState("default");
  return (
    <Listbox value={value} onChange={value => setValue(value)}>
      <ListboxOption value="default">
        <span aria-hidden>🌮</span> Choose a taco
      </ListboxOption>
      <hr />
      <ListboxOption value="asada" valueText="Carne Asada">
        <span aria-hidden>🌮</span> Carne Asada
      </ListboxOption>
      <ListboxOption value="pollo" valueText="Pollo">
        <span aria-hidden>🌮</span> Pollo
      </ListboxOption>
      <ListboxOption value="pastor" valueText="Pastor">
        <span aria-hidden>🌮</span> Pastor
      </ListboxOption>
      <ListboxOption value="lengua" valueText="Lengua">
        <span aria-hidden>🌮</span> Lengua
      </ListboxOption>
    </Listbox>
  );
};
