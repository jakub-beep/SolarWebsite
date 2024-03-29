const add_navbar = () => {
  const max_width_navbar = document.createElement("div");
  const ul = document.createElement("ul");
  const logo = document.createElement("div");
  const menu_btn = document.createElement("div");
  const link = document.createElement("a");
  const span = document.createElement("span");
  const lng_buttons = document.createElement("div");

  const button_pl = document.createElement("button");
  const button_en = document.createElement("button");
  const button_ge = document.createElement("button");

  const img_pl = document.createElement("img");
  const img_en = document.createElement("img");
  const img_ge = document.createElement("img");

  max_width_navbar.className = "max-width-navbar";
  logo.className = "logo";
  ul.className = "menu";
  ul.id = "menu";
  menu_btn.className = "menu-btn";
  menu_btn.innerHTML = '<i class="fas fa-bars"></i>';
  span.innerHTML = "SOLAR";

  link.href = "index.html";
  link.appendChild(span);
  link_text = document.createTextNode("DYNAMICS");
  link.appendChild(link_text);
  logo.appendChild(link);

  lng_buttons.className = "lng-buttons";

  button_en.href = "";
  button_en.id = "en";
  button_en.className = "translate";

  button_pl.href = "";
  button_pl.id = "pl";
  button_pl.className = "translate";

  button_ge.href = "";
  button_ge.id = "ge";
  button_ge.className = "translate";

  img_en.src = "./flags/uk.png";
  img_en.alt = "";
  img_en.style.width = "40px";

  img_pl.src = "./flags/pl.png";
  img_pl.alt = "";
  img_pl.style.width = "40px";

  img_ge.src = "./flags/ge.png";
  img_ge.alt = "";
  img_ge.style.width = "40px";

  button_en.appendChild(img_en);
  button_pl.appendChild(img_pl);
  button_ge.appendChild(img_ge);

  lng_buttons.appendChild(button_en);
  lng_buttons.appendChild(button_pl);
  lng_buttons.appendChild(button_ge);

  max_width_navbar.appendChild(logo);
  max_width_navbar.appendChild(ul);
  max_width_navbar.appendChild(menu_btn);
  max_width_navbar.appendChild(lng_buttons);
  document.getElementById("navbar").appendChild(max_width_navbar);
};
