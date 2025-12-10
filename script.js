const STORAGE_KEY = "krns_workshops app";

const TEXT = {
  en: {
    app_title: "KRNS Workshops app",

    // Tabs
    tab_home: "Home",
    tab_customers: "Customers",
    tab_jobs: "Jobs",
    tab_today: "Today",
    tab_reminders: "Reminders",
    tab_billing: "Billing",

    // Global search (GPay style)
    search_placeholder: "Search name, mobile, vehicle no, date, job…",
    no_results: "No results found",

    // Home
    home_quick_title: "Quick actions",
    home_quick_new_job_title: "New Job",
    home_quick_today_title: "Today’s Jobs",
    home_quick_customers_title: "Customers",
    home_quick_billing_title: "Billing / Print",
    home_recent_title: "Recent jobs",

    // Customers
    customer_form_title: "Customer",
    customer_name_label: "Name*",
    customer_phone_label: "Phone*",
    customer_whatsapp_label: "WhatsApp number",
    customer_notes_label: "Notes",
    save_customer: "Save customer",
    customer_search_placeholder: "Search by name or phone",
    no_customers: "No customers",

    customer_detail_title: "Customer Detail",
    customer_detail_add_vehicle: "Add vehicle",
    customer_detail_add_job: "Add job",
    customer_detail_history_btn: "View history",
    customer_detail_vehicles_title: "Vehicles & service history",

    customer_history_title: "Customer History",
    no_customer_history: "No jobs for this customer yet",

    // Vehicles
    vehicle_form_title: "Vehicle",
    vehicle_customer_label: "Customer*",
    vehicle_type_label: "Vehicle type*",
    vehicle_type_bike: "Bike",
    vehicle_type_car: "Car",
    vehicle_model_label: "Model*",
    vehicle_number_label: "Vehicle number*",
    vehicle_notes_label: "Notes",
    save_vehicle: "Save vehicle",
    vehicle_search_placeholder: "Search by vehicle, model, customer",
    no_vehicles: "No vehicles",

    // Jobs
    job_form_title_new: "New Job / Service",
    job_form_title_edit: "Edit Job / Service",
    job_date_label: "Job date*",
    job_vehicle_number_label: "Vehicle number*",
    job_vehicle_model_label: "Vehicle model",
    job_description_label: "Work done / description*",
    job_amount_label: "Total amount (₹)",
    job_next_date_label: "Next service date",
    job_customer_name_label: "Customer name",
    job_customer_phone_label: "Customer phone",
    save_job: "Save job",
    update_job: "Update job",
    job_editing_hint: "Editing existing job. Save to update.",
    job_required_warning: "Please fill all required fields.",

    // Today & reminders
    today_title: "Today’s jobs",
    no_jobs_today: "No jobs today",

    reminders_title: "Reminders",
    no_reminders: "No reminders",
    reminder_overdue: "Overdue",
    reminder_today: "Today",
    reminder_upcoming: "Upcoming",
    reminder_whatsapp: "WhatsApp",

    amount_prefix: "₹",

    list_no_services: "No service records",

    unknown_customer: "Unknown customer",
    unknown_vehicle: "Unknown vehicle",

    edit_label: "Edit",
    delete_label: "Delete",
    delete_confirm: "Delete this job?",

    // Billing
    billing_title: "Billing",
    billing_select_job: "Select job for billing",
    billing_bill_preview: "Bill preview",
    billing_print: "Print / PDF",
    billing_empty: "Select a job from the list to generate bill.",
  },

  ta: {
    app_title: "KRNS வொர்க்ஷாப் app",

    tab_home: "முகப்பு",
    tab_customers: "கஸ்டமர்",
    tab_jobs: "ஜாப்",
    tab_today: "இன்று",
    tab_reminders: "ரிமைண்டர்",
    tab_billing: "பில்",

    home_quick_title: "விரைவு செயல்கள்",
    home_quick_new_job_title: "புதிய ஜாப்",
    home_quick_today_title: "இன்றைய ஜாப்",
    home_quick_customers_title: "கஸ்டமர்கள்",
    home_quick_billing_title: "பில்லிங் / பிரிண்ட்",

    search_placeholder: "பெயர், மொபைல், வாகன எண், தேதீ, வேலை…",
    no_results: "பதிவு இல்லை",

    home_recent_title: "சமீபத்திய ஜாப்",

    customer_form_title: "கஸ்டமர்",
    customer_name_label: "பெயர்*",
    customer_phone_label: "மொபைல்*",
    customer_whatsapp_label: "வாட்ஸ்அப் நம்பர்",
    customer_notes_label: "குறிப்பு",
    save_customer: "கஸ்டமர் சேமிக்க",
    customer_search_placeholder: "பெயர் / மொபைல் தேடுக",
    no_customers: "கஸ்டமர் இல்லை",

    customer_detail_title: "கஸ்டமர் விவரம்",
    customer_detail_add_vehicle: "வாகனம் சேர்க்க",
    customer_detail_add_job: "ஜாப் சேர்க்க",
    customer_detail_history_btn: "ஹிஸ்டரி",
    customer_detail_vehicles_title: "வாகனங்கள் & சர்வீஸ்",

    customer_history_title: "கஸ்டமர் ஹிஸ்டரி",
    no_customer_history: "இந்த கஸ்டமருக்கு இன்னும் ஜாப் இல்லை",

    vehicle_form_title: "வாகனம்",
    vehicle_customer_label: "கஸ்டமர்*",
    vehicle_type_label: "வாகன வகை*",
    vehicle_type_bike: "பைக்",
    vehicle_type_car: "கார்",
    vehicle_model_label: "மோடல்*",
    vehicle_number_label: "வாகன எண்*",
    vehicle_notes_label: "குறிப்பு",
    save_vehicle: "வாகனம் சேமிக்க",
    vehicle_search_placeholder: "வாகன எண் / மோடல் / கஸ்டமர்",
    no_vehicles: "வாகனம் இல்லை",

    job_form_title_new: "புதிய ஜாப் / சர்வீஸ்",
    job_form_title_edit: "ஜாப் எடிட்",
    job_date_label: "ஜாப் தேதீ*",
    job_vehicle_number_label: "வாகன எண்*",
    job_vehicle_model_label: "வாகன மோடல்",
    job_description_label: "வேலை விபரம்*",
    job_amount_label: "காசு (₹)",
    job_next_date_label: "அடுத்த சர்வீஸ் தேதீ",
    job_customer_name_label: "கஸ்டமர் பெயர்",
    job_customer_phone_label: "கஸ்டமர் மொபைல்",
    save_job: "ஜாப் சேமிக்க",
    update_job: "ஜாப் அப்டேட்",
    job_editing_hint: "இருக்கும் ஜாப் எடிட் ஆகுது. சேமி = அப்டேட்.",
    job_required_warning: "தேவையான இடங்களை நிரப்புங்கள்.",

    today_title: "இன்றைய ஜாப்",
    no_jobs_today: "இன்று ஜாப் இல்லை",

    reminders_title: "ரிமைண்டர்",
    no_reminders: "ரிமைண்டர் இல்லை",
    reminder_overdue: "கடந்து போயிற்று",
    reminder_today: "இன்று",
    reminder_upcoming: "வரும் நாள்",
    reminder_whatsapp: "வாட்ஸ்அப்",

    amount_prefix: "₹",

    list_no_services: "சர்வீஸ் ரெக்கார்ட் இல்லை",

    unknown_customer: "கஸ்டமர் இல்லை",
    unknown_vehicle: "வாகனம் இல்லை",

    edit_label: "எடிட்",
    delete_label: "டிலீட்",
    delete_confirm: "இந்த ஜாப் டிலீட் பண்ணலாமா?",

    billing_title: "பில்",
    billing_select_job: "பில் க்கு ஜாப் தேர்வு",
    billing_bill_preview: "பில்",
    billing_print: "பிரிண்ட் / PDF",
    billing_empty: "லிஸ்ட்ல இருந்து ஜாப் தேர்வு செய்யவும்.",
  },
};

const state = {
  customers: [],
  vehicles: [],
  services: [],
  currentLang: "en",
  editingServiceId: null,
  selectedCustomerId: null,
};

const THEME_STORAGE_KEY = "krns_theme"; // "dark" or "light"

function updateThemeToggleIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  btn.textContent = theme === "light" ? "🌙" : "🌞";
}

function applyTheme(theme) {
  const root = document.documentElement; // <html>
  const finalTheme = theme === "light" ? "light" : "dark";

  if (finalTheme === "light") {
    root.classList.add("theme-light");
  } else {
    root.classList.remove("theme-light");
  }

  localStorage.setItem(THEME_STORAGE_KEY, finalTheme);
  updateThemeToggleIcon(finalTheme);
}

function initTheme() {
  const saved =
    localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  applyTheme(saved);

  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const current =
        document.documentElement.classList.contains("theme-light")
          ? "light"
          : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }
}

/* ---------- Utils ---------- */

function t(key) {
  const lang = state.currentLang || "en";
  const pack = TEXT[lang] || TEXT.en;
  return (pack && pack[key]) || TEXT.en[key] || key;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.customers)) state.customers = parsed.customers;
    if (Array.isArray(parsed.vehicles)) state.vehicles = parsed.vehicles;
    if (Array.isArray(parsed.services)) state.services = parsed.services;
    if (parsed.currentLang === "en" || parsed.currentLang === "ta") {
      state.currentLang = parsed.currentLang;
    }
  } catch (e) {
    console.error("Error loading data", e);
  }
}

function saveState() {
  const toSave = {
    customers: state.customers,
    vehicles: state.vehicles,
    services: state.services,
    currentLang: state.currentLang,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.error("Error saving data", e);
  }
}

function genId() {
  return (
    Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8)
  );
}

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toNumberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  const n = Number(value);
  if (Number.isNaN(n)) return null;
  return n;
}

function findCustomerById(id) {
  return state.customers.find((c) => c.id === id) || null;
}

function findCustomerByPhone(phoneRaw) {
  const phone = (phoneRaw || "").trim();
  if (!phone) return null;
  return state.customers.find((c) => (c.phone || "").trim() === phone) || null;
}

function findVehicleById(id) {
  return state.vehicles.find((v) => v.id === id) || null;
}

function findVehicleByNumber(numberRaw) {
  const num = (numberRaw || "").trim().toUpperCase();
  if (!num) return null;
  return (
    state.vehicles.find(
      (v) => (v.number || "").trim().toUpperCase() === num
    ) || null
  );
}

function normalizePhone(phone) {
  return (phone || "").replace(/\D/g, "");
}

/* ---------- Language ---------- */

function applyStaticTranslations() {
  // normal text
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    el.textContent = t(key);
  });

  // placeholders
  document.querySelectorAll("[data-t-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-t-placeholder");
    el.placeholder = t(key);
  });

  // select options
  document.querySelectorAll("[data-t-option]").forEach((opt) => {
    const key = opt.getAttribute("data-t-option");
    opt.textContent = t(key);
  });

  // global search placeholder
  const globalSearchInput = document.getElementById("globalSearchInput");
  if (globalSearchInput) globalSearchInput.placeholder = t("search_placeholder");
}

function updateLangToggleButton() {
  const enTag = document.querySelector('[data-lang-tag="en"]');
  const taTag = document.querySelector('[data-lang-tag="ta"]');
  if (!enTag || !taTag) return;
  if (state.currentLang === "en") {
    enTag.classList.add("active");
    enTag.classList.remove("inactive");
    taTag.classList.add("inactive");
    taTag.classList.remove("active");
  } else {
    taTag.classList.add("active");
    taTag.classList.remove("inactive");
    enTag.classList.add("inactive");
    enTag.classList.remove("active");
  }
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "ta") return;
  state.currentLang = lang;
  saveState();
  updateLangToggleButton();
  applyStaticTranslations();
  renderAll();
}

/* ---------- Navigation ---------- */

const screenRootMap = {
  home: "home",
  customers: "customers",
  customerDetail: "customers",
  customerHistory: "customers",
  vehicles: "customers",
  jobs: "jobs",
  today: "today",
  reminders: "reminders",
  billing: "billing",
};

function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((sec) => {
    const name = sec.getAttribute("data-screen");
    sec.classList.toggle("active", name === screenName);
  });

  const rootTab = screenRootMap[screenName] || screenName;
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const tab = btn.getAttribute("data-tab");
    btn.classList.toggle("active", tab === rootTab);
  });
}

/* ---------- Data helpers ---------- */

function buildCustomerVehicles(customerId) {
  return state.vehicles.filter((v) => v.customerId === customerId);
}

function buildCustomerServices(customerId) {
  const vehicles = buildCustomerVehicles(customerId);
  const ids = new Set(vehicles.map((v) => v.id));
  return state.services
    .filter((s) => ids.has(s.vehicleId))
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function buildServiceDisplayData(service) {
  const vehicle = findVehicleById(service.vehicleId);
  const customer =
    vehicle && vehicle.customerId ? findCustomerById(vehicle.customerId) : null;
  return { service, vehicle, customer };
}

/* ---------- Customers ---------- */

function renderCustomersList() {
  const list = document.getElementById("customerList");
  const searchInput = document.getElementById("customerSearchInput");
  if (!list || !searchInput) return;

  const q = (searchInput.value || "").trim().toLowerCase();

  let filtered = state.customers;
  if (q) {
    filtered = filtered.filter(
      (c) =>
        (c.name || "").toLowerCase().includes(q) ||
        (c.phone || "").toLowerCase().includes(q)
    );
  }

  list.innerHTML = "";
  if (filtered.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_customers");
    list.appendChild(div);
    return;
  }

  filtered.forEach((customer) => {
    const item = document.createElement("div");
    item.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = customer.name || t("unknown_customer");

    const phone = document.createElement("div");
    phone.className = "list-item-sub";
    phone.textContent = customer.phone || "";

    header.appendChild(title);
    header.appendChild(phone);

    const vehicleLine = document.createElement("div");
    vehicleLine.className = "list-item-footer";
    const vehicles = buildCustomerVehicles(customer.id);
    if (vehicles.length === 0) {
      vehicleLine.textContent = t("no_vehicles");
    } else {
      vehicleLine.textContent = vehicles
        .map((v) => v.number || "")
        .filter(Boolean)
        .join(", ");
    }

    item.appendChild(header);
    item.appendChild(vehicleLine);

    item.addEventListener("click", () => {
      state.selectedCustomerId = customer.id;
      renderCustomerDetail();
      renderCustomerHistory();
      showScreen("customerDetail");
    });

    list.appendChild(item);
  });
}

function handleCustomerFormSubmit(ev) {
  ev.preventDefault();

  const nameInput = document.getElementById("customerNameInput");
  const phoneInput = document.getElementById("customerPhoneInput");
  const whatsappInput = document.getElementById("customerWhatsappInput");
  const notesInput = document.getElementById("customerNotesInput");
  const form = document.getElementById("customerForm");

  if (!nameInput || !phoneInput || !whatsappInput || !notesInput || !form) {
    return;
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const hasWhatsapp = whatsappInput.checked;
  const notes = notesInput.value.trim();

  if (!name || !phone) {
    alert(t("job_required_warning"));
    return;
  }

  const newCustomer = {
    id: genId(),
    name,
    phone,
    notes,
    hasWhatsapp,
  };

  state.customers.push(newCustomer);
  saveState();

  form.reset();
  whatsappInput.checked = true;

  renderCustomersList();
  renderVehicleSelect();
  renderHomeRecentPeople();
}

/* ---------- Customer detail & history ---------- */

function renderCustomerDetail() {
  const id = state.selectedCustomerId;
  const nameEl = document.getElementById("customerDetailName");
  const phoneEl = document.getElementById("customerDetailPhone");
  const notesEl = document.getElementById("customerDetailNotes");
  const vehicleList = document.getElementById("customerDetailVehicleList");

  if (!nameEl || !phoneEl || !notesEl || !vehicleList) return;

  if (!id) {
    nameEl.value = "";
    phoneEl.value = "";
    notesEl.value = "";
    vehicleList.innerHTML = "";
    return;
  }

  const customer = findCustomerById(id);
  if (!customer) {
    nameEl.value = "";
    phoneEl.value = "";
    notesEl.value = "";
    vehicleList.innerHTML = "";
    return;
  }

  nameEl.value = customer.name || "";
  phoneEl.value = customer.phone || "";
  notesEl.value = customer.notes || "";

  const vehicles = buildCustomerVehicles(customer.id);

  vehicleList.innerHTML = "";
  if (vehicles.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_vehicles");
    vehicleList.appendChild(div);
    return;
  }

  vehicles.forEach((vehicle) => {
    const card = document.createElement("div");
    card.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent =
      (vehicle.number || t("unknown_vehicle")) +
      (vehicle.model ? " • " + vehicle.model : "");

    const type = document.createElement("div");
    type.className = "list-item-sub";
    if (vehicle.type === "bike") {
      type.textContent = t("vehicle_type_bike");
    } else if (vehicle.type === "car") {
      type.textContent = t("vehicle_type_car");
    } else {
      type.textContent = "";
    }

    header.appendChild(title);
    header.appendChild(type);

    const servicesForVehicle = state.services
      .filter((s) => s.vehicleId === vehicle.id)
      .slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
      .slice(0, 5);

    const body = document.createElement("div");
    body.className = "list-item-footer";

    if (servicesForVehicle.length === 0) {
      body.textContent = t("list_no_services");
    } else {
      servicesForVehicle.forEach((service) => {
        const line = document.createElement("div");
        line.className = "text-small";
        const parts = [];
        if (service.date) parts.push(service.date);
        if (service.description) parts.push(service.description);
        if (service.amount != null)
          parts.push(t("amount_prefix") + " " + service.amount);
        if (service.nextDate) parts.push("Next: " + service.nextDate);
        line.textContent = parts.join(" • ");
        body.appendChild(line);
      });
    }

    card.appendChild(header);
    card.appendChild(body);
    vehicleList.appendChild(card);
  });
}

function saveCustomerDetail() {
  const id = state.selectedCustomerId;
  if (!id) return;

  const customer = findCustomerById(id);
  if (!customer) return;

  const nameEl = document.getElementById("customerDetailName");
  const phoneEl = document.getElementById("customerDetailPhone");
  const notesEl = document.getElementById("customerDetailNotes");
  if (!nameEl || !phoneEl || !notesEl) return;

  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();
  const notes = notesEl.value.trim();

  if (!name || !phone) {
    alert(t("job_required_warning"));
    nameEl.value = customer.name || "";
    phoneEl.value = customer.phone || "";
    notesEl.value = customer.notes || "";
    return;
  }

  customer.name = name;
  customer.phone = phone;
  customer.notes = notes;

  saveState();

  renderCustomersList();
  renderCustomerHistory();
  renderRemindersList();
  renderTodayList();
  renderHomeRecentPeople();
  runGlobalSearch();
}

function renderCustomerHistory() {
  const container = document.getElementById("customerHistoryList");
  const nameEl = document.getElementById("customerHistoryName");
  const phoneEl = document.getElementById("customerHistoryPhone");
  const notesEl = document.getElementById("customerHistoryNotes");

  if (!container || !nameEl || !phoneEl || !notesEl) return;

  const id = state.selectedCustomerId;
  if (!id) {
    container.innerHTML = "";
    nameEl.textContent = "";
    phoneEl.textContent = "";
    notesEl.textContent = "";
    return;
  }

  const customer = findCustomerById(id);
  if (!customer) {
    container.innerHTML = "";
    nameEl.textContent = t("unknown_customer");
    phoneEl.textContent = "";
    notesEl.textContent = "";
    return;
  }

  nameEl.textContent = customer.name || t("unknown_customer");
  phoneEl.textContent = customer.phone || "";
  notesEl.textContent = customer.notes || "";

  const services = buildCustomerServices(customer.id);

  container.innerHTML = "";
  if (services.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_customer_history");
    container.appendChild(div);
    return;
  }

  services.forEach((service) => {
    const data = buildServiceDisplayData(service);
    const vehicle = data.vehicle;
    const item = document.createElement("div");
    item.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = (vehicle && vehicle.number) || t("unknown_vehicle");

    const model = document.createElement("div");
    model.className = "list-item-sub";
    model.textContent = vehicle && vehicle.model ? vehicle.model : "";

    header.appendChild(title);
    header.appendChild(model);

    const footer = document.createElement("div");
    footer.className = "list-item-footer";
    const parts = [];
    if (service.date) parts.push(service.date);
    if (service.nextDate) parts.push("Next: " + service.nextDate);
    if (service.description) parts.push(service.description);
    if (service.amount != null)
      parts.push(t("amount_prefix") + " " + service.amount);
    footer.textContent = parts.join(" • ");

    item.appendChild(header);
    item.appendChild(footer);
    container.appendChild(item);
  });
}
/* ---------- Vehicles ---------- */

function renderVehicleSelect() {
  const select = document.getElementById("vehicleCustomerSelect");
  if (!select) return;

  const currentValue = select.value;

  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "--";
  select.appendChild(placeholder);

  state.customers.forEach((customer) => {
    const opt = document.createElement("option");
    opt.value = customer.id;
    opt.textContent =
      (customer.name || t("unknown_customer")) +
      (customer.phone ? " • " + customer.phone : "");
    select.appendChild(opt);
  });

  if (currentValue) {
    select.value = currentValue;
  }
}

function renderVehicleList() {
  const list = document.getElementById("vehicleList");
  const searchInput = document.getElementById("vehicleSearchInput");
  if (!list || !searchInput) return;

  const q = (searchInput.value || "").trim().toLowerCase();

  let filtered = state.vehicles;
  if (q) {
    filtered = filtered.filter((v) => {
      const customer = v.customerId && findCustomerById(v.customerId);
      return (
        (v.number || "").toLowerCase().includes(q) ||
        (v.model || "").toLowerCase().includes(q) ||
        (customer && (customer.name || "").toLowerCase().includes(q))
      );
    });
  }

  list.innerHTML = "";
  if (filtered.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_vehicles");
    list.appendChild(div);
    return;
  }

  filtered.forEach((vehicle) => {
    const customer = vehicle.customerId && findCustomerById(vehicle.customerId);
    const item = document.createElement("div");
    item.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent =
      (vehicle.number || t("unknown_vehicle")) +
      (vehicle.model ? " • " + vehicle.model : "");

    const type = document.createElement("div");
    type.className = "list-item-sub";
    if (vehicle.type === "bike") {
      type.textContent = t("vehicle_type_bike");
    } else if (vehicle.type === "car") {
      type.textContent = t("vehicle_type_car");
    } else {
      type.textContent = "";
    }

    header.appendChild(title);
    header.appendChild(type);

    const footer = document.createElement("div");
    footer.className = "list-item-footer";
    footer.textContent = customer
      ? (customer.name || "") + (customer.phone ? " • " + customer.phone : "")
      : "";

    item.appendChild(header);
    item.appendChild(footer);
    list.appendChild(item);
  });
}

function handleVehicleFormSubmit(ev) {
  ev.preventDefault();

  const customerSelect = document.getElementById("vehicleCustomerSelect");
  const typeSelect = document.getElementById("vehicleTypeSelect");
  const modelInput = document.getElementById("vehicleModelInput");
  const numberInput = document.getElementById("vehicleNumberInput");
  const notesInput = document.getElementById("vehicleNotesInput");
  const form = document.getElementById("vehicleForm");

  if (
    !customerSelect ||
    !typeSelect ||
    !modelInput ||
    !numberInput ||
    !notesInput ||
    !form
  ) {
    return;
  }

  const customerId = customerSelect.value;
  const type = typeSelect.value;
  const model = modelInput.value.trim();
  const numberRaw = numberInput.value.trim();
  const notes = notesInput.value.trim();

  if (!customerId || !type || !model || !numberRaw) {
    alert(t("job_required_warning"));
    return;
  }

  const number = numberRaw.toUpperCase();

  const existing = findVehicleByNumber(number);
  if (existing) {
    existing.customerId = customerId;
    existing.type = type;
    existing.model = model;
    existing.number = number;
    existing.notes = notes;
  } else {
    const vehicle = {
      id: genId(),
      customerId,
      type,
      model,
      number,
      notes,
    };
    state.vehicles.push(vehicle);
  }

  saveState();
  form.reset();
  renderVehicleList();
  renderCustomerDetail();
}

/* ---------- Jobs ---------- */

function resetJobFormToNew() {
  state.editingServiceId = null;
  const form = document.getElementById("jobForm");
  if (!form) return;

  form.reset();

  const dateInput = document.getElementById("jobDateInput");
  if (dateInput) {
    dateInput.value = todayStr();
  }

  const modeLabel = document.getElementById("jobFormModeLabel");
  if (modeLabel) {
    modeLabel.classList.add("hidden");
    modeLabel.textContent = t("job_editing_hint");
  }

  const titleEl = document.getElementById("jobFormTitle");
  const btn = document.getElementById("jobFormSubmitBtn");
  if (titleEl && btn) {
    titleEl.textContent = t("job_form_title_new");
    btn.textContent = t("save_job");
  }
}

function startEditService(serviceId) {
  const service = state.services.find((s) => s.id === serviceId);
  if (!service) return;

  state.editingServiceId = serviceId;

  const vehicle = findVehicleById(service.vehicleId);
  const customer =
    vehicle && vehicle.customerId ? findCustomerById(vehicle.customerId) : null;

  const dateInput = document.getElementById("jobDateInput");
  const vehicleNumberInput = document.getElementById("jobVehicleNumberInput");
  const vehicleModelInput = document.getElementById("jobVehicleModelInput");
  const descInput = document.getElementById("jobDescriptionInput");
  const amountInput = document.getElementById("jobAmountInput");
  const nextDateInput = document.getElementById("jobNextDateInput");
  const customerNameInput = document.getElementById("jobCustomerNameInput");
  const customerPhoneInput = document.getElementById("jobCustomerPhoneInput");
  const modeLabel = document.getElementById("jobFormModeLabel");
  const titleEl = document.getElementById("jobFormTitle");
  const btn = document.getElementById("jobFormSubmitBtn");

  if (
    !dateInput ||
    !vehicleNumberInput ||
    !vehicleModelInput ||
    !descInput ||
    !amountInput ||
    !nextDateInput ||
    !customerNameInput ||
    !customerPhoneInput ||
    !modeLabel ||
    !titleEl ||
    !btn
  ) {
    return;
  }

  dateInput.value = service.date || todayStr();
  vehicleNumberInput.value = (vehicle && vehicle.number) || "";
  vehicleModelInput.value = (vehicle && vehicle.model) || "";
  descInput.value = service.description || "";
  amountInput.value =
    service.amount != null && service.amount !== "" ? service.amount : "";
  nextDateInput.value = service.nextDate || "";
  customerNameInput.value = (customer && customer.name) || "";
  customerPhoneInput.value = (customer && customer.phone) || "";

  modeLabel.classList.remove("hidden");
  modeLabel.textContent = t("job_editing_hint");

  titleEl.textContent = t("job_form_title_edit");
  btn.textContent = t("update_job");

  showScreen("jobs");
}

function handleJobFormSubmit(ev) {
  ev.preventDefault();

  const dateInput = document.getElementById("jobDateInput");
  const vehicleNumberInput = document.getElementById("jobVehicleNumberInput");
  const vehicleModelInput = document.getElementById("jobVehicleModelInput");
  const descInput = document.getElementById("jobDescriptionInput");
  const amountInput = document.getElementById("jobAmountInput");
  const nextDateInput = document.getElementById("jobNextDateInput");
  const customerNameInput = document.getElementById("jobCustomerNameInput");
  const customerPhoneInput = document.getElementById("jobCustomerPhoneInput");

  if (
    !dateInput ||
    !vehicleNumberInput ||
    !vehicleModelInput ||
    !descInput ||
    !amountInput ||
    !nextDateInput ||
    !customerNameInput ||
    !customerPhoneInput
  ) {
    return;
  }

  const date = dateInput.value;
  const vehicleNumberRaw = vehicleNumberInput.value.trim();
  const vehicleModel = vehicleModelInput.value.trim();
  const description = descInput.value.trim();
  const amountStr = amountInput.value.trim();
  const nextDate = nextDateInput.value;
  const customerName = customerNameInput.value.trim();
  const customerPhoneRaw = customerPhoneInput.value.trim();

  if (!date || !vehicleNumberRaw || !description) {
    alert(t("job_required_warning"));
    return;
  }

  const vehicleNumber = vehicleNumberRaw.toUpperCase();
  const amount = toNumberOrNull(amountStr);
  const customerPhone = customerPhoneRaw;

  let customer = null;

  if (customerPhone) {
    const existingCustomer = findCustomerByPhone(customerPhone);
    if (existingCustomer) {
      if (!existingCustomer.name && customerName) {
        existingCustomer.name = customerName;
      }
      customer = existingCustomer;
    } else {
      customer = {
        id: genId(),
        name: customerName || customerPhone,
        phone: customerPhone,
        notes: "",
        hasWhatsapp: true,
      };
      state.customers.push(customer);
    }
  }

  let vehicle = findVehicleByNumber(vehicleNumber);
  if (vehicle) {
    if (!vehicle.model && vehicleModel) vehicle.model = vehicleModel;
    if (customer && !vehicle.customerId) vehicle.customerId = customer.id;
  } else {
    vehicle = {
      id: genId(),
      customerId: customer ? customer.id : null,
      type: "",
      model: vehicleModel || "",
      number: vehicleNumber,
      notes: "",
    };
    state.vehicles.push(vehicle);
  }

  if (state.editingServiceId) {
    const svc = state.services.find((s) => s.id === state.editingServiceId);
    if (svc) {
      svc.vehicleId = vehicle.id;
      svc.date = date;
      svc.description = description;
      svc.amount = amount;
      svc.nextDate = nextDate || "";
      svc.notes = svc.notes || "";
    }
  } else {
    const service = {
      id: genId(),
      vehicleId: vehicle.id,
      date,
      description,
      amount,
      nextDate: nextDate || "",
      notes: "",
    };
    state.services.push(service);
  }

  saveState();
  resetJobFormToNew();
  renderAll();
}

/* ---------- Today ---------- */

function renderTodayList() {
  const container = document.getElementById("todayList");
  if (!container) return;

  const today = todayStr();
  const services = state.services.filter((s) => s.date === today);

  container.innerHTML = "";
  if (services.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_jobs_today");
    container.appendChild(div);
    return;
  }

  services
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .forEach((service) => {
      const data = buildServiceDisplayData(service);
      const vehicle = data.vehicle;
      const customer = data.customer;

      const item = document.createElement("div");
      item.className = "list-item-card";

      const header = document.createElement("div");
      header.className = "list-item-header";

      const title = document.createElement("div");
      title.className = "list-item-title";
      title.textContent = (vehicle && vehicle.number) || t("unknown_vehicle");

      const amountEl = document.createElement("div");
      amountEl.className = "list-item-sub";
      amountEl.textContent =
        service.amount != null ? t("amount_prefix") + " " + service.amount : "";

      header.appendChild(title);
      header.appendChild(amountEl);

      const footer = document.createElement("div");
      footer.className = "list-item-footer";
      const parts = [];
      if (customer && customer.name) parts.push(customer.name);
      if (service.description) parts.push(service.description);
      footer.textContent = parts.join(" • ");

      item.appendChild(header);
      item.appendChild(footer);
      container.appendChild(item);
    });
}

/* ---------- Reminders ---------- */

function renderRemindersList() {
  const container = document.getElementById("remindersList");
  if (!container) return;

  const today = todayStr();

  const services = state.services
    .filter((s) => s.nextDate)
    .slice()
    .sort((a, b) => (a.nextDate || "").localeCompare(b.nextDate || ""));

  container.innerHTML = "";
  if (services.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_reminders");
    container.appendChild(div);
    return;
  }

  services.forEach((service) => {
    const data = buildServiceDisplayData(service);
    const vehicle = data.vehicle;
    const customer = data.customer;

    const item = document.createElement("div");
    item.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = (vehicle && vehicle.number) || t("unknown_vehicle");

    const nextDateEl = document.createElement("div");
    nextDateEl.className = "list-item-sub";
    nextDateEl.textContent = service.nextDate || "";

    header.appendChild(title);
    header.appendChild(nextDateEl);

    const footer = document.createElement("div");
    footer.className = "list-item-footer";

    const statusLine = document.createElement("div");
    statusLine.className = "status-line";

    const left = document.createElement("div");
    left.className = "text-small";
    left.textContent = customer
      ? customer.name || ""
      : t("unknown_customer");

    const right = document.createElement("div");

    const badge = document.createElement("span");
    badge.className = "badge text-small";

    if (service.nextDate < today) {
      badge.classList.add("badge-overdue");
      badge.textContent = t("reminder_overdue");
    } else if (service.nextDate === today) {
      badge.classList.add("badge-today");
      badge.textContent = t("reminder_today");
    } else {
      badge.classList.add("badge-upcoming");
      badge.textContent = t("reminder_upcoming");
    }

    right.appendChild(badge);

    if (customer && customer.phone) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-small btn-outline mt-4";
      btn.textContent = t("reminder_whatsapp");

      btn.addEventListener("click", () => {
        const cleaned = normalizePhone(customer.phone);
        if (!cleaned) return;

        let phone;
        if (cleaned.startsWith("91")) {
          phone = cleaned;
        } else {
          const lastTen = cleaned.slice(-10);
          phone = "91" + lastTen;
        }

        const msg =
          "Hello " +
          (customer.name || "") +
          ", your next service is due for vehicle " +
          ((vehicle && vehicle.number) || "") +
          " on " +
          (service.nextDate || "") +
          ".";

        const url =
          "https://api.whatsapp.com/send?phone=" +
          encodeURIComponent(phone) +
          "&text=" +
          encodeURIComponent(msg);

        window.location.href = url;
      });

      right.appendChild(btn);
    }

    statusLine.appendChild(left);
    statusLine.appendChild(right);
    footer.appendChild(statusLine);

    item.appendChild(header);
    item.appendChild(footer);
    container.appendChild(item);
  });
}
/* ---------- Global GPay-style search ---------- */

function runGlobalSearch() {
  const input = document.getElementById("globalSearchInput");
  const box = document.getElementById("globalSearchResults");
  if (!input || !box) return;

  const q = input.value.trim().toLowerCase();
  box.innerHTML = "";
  if (!q) {
    box.style.display = "none";
    return;
  }
  box.style.display = "block";

  const results = [];

  // Services (jobs)
  state.services.forEach((s) => {
    const { vehicle, customer } = buildServiceDisplayData(s);
    const fields = [
      s.description,
      s.date,
      String(s.amount || ""),
      vehicle && vehicle.number,
      vehicle && vehicle.model,
      customer && customer.name,
      customer && customer.phone,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    if (fields.includes(q)) {
      results.push({
        type: "job",
        id: s.id,
        title: (vehicle && vehicle.number) || t("unknown_vehicle"),
        sub:
          (customer && customer.name ? customer.name + " • " : "") +
          (s.date || "") +
          (s.amount != null ? " • " + t("amount_prefix") + s.amount : ""),
      });
    }
  });

  // Customers
  state.customers.forEach((c) => {
    const fields = [c.name, c.phone, c.notes]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (fields.includes(q)) {
      results.push({
        type: "customer",
        id: c.id,
        title: c.name || t("unknown_customer"),
        sub: c.phone || "",
      });
    }
  });

  // Vehicles
  state.vehicles.forEach((v) => {
    const fields = [v.number, v.model].filter(Boolean).join(" ").toLowerCase();
    if (fields.includes(q)) {
      results.push({
        type: "vehicle",
        id: v.id,
        title: v.number || t("unknown_vehicle"),
        sub: v.model || "",
      });
    }
  });

  const finalResults = results.slice(0, 40);

  if (finalResults.length === 0) {
    const div = document.createElement("div");
    div.className = "search-item";
    div.textContent = t("no_results");
    box.appendChild(div);
    return;
  }

  finalResults.forEach((r) => {
    const item = document.createElement("div");
    item.className = "search-item";
    const title = document.createElement("div");
    title.className = "search-title";
    title.textContent = r.title;
    const sub = document.createElement("div");
    sub.className = "search-sub";
    sub.textContent = r.sub;

    item.appendChild(title);
    item.appendChild(sub);

    item.addEventListener("click", () => {
      if (r.type === "job") {
        startEditService(r.id);
      } else if (r.type === "customer") {
        state.selectedCustomerId = r.id;
        renderCustomerDetail();
        renderCustomerHistory();
        showScreen("customerDetail");
      } else if (r.type === "vehicle") {
        showScreen("vehicles");
      }

      input.value = "";
      box.innerHTML = "";
      box.style.display = "none";
    });

    box.appendChild(item);
  });
}

/* ---------- Billing ---------- */

function renderBillingJobList() {
  const listEl = document.getElementById("billingJobList");
  const searchEl = document.getElementById("billingJobSearchInput");
  if (!listEl || !searchEl) return;

  const q = (searchEl.value || "").trim().toLowerCase();

  let services = state.services.slice();

  services.sort((a, b) => {
    const da = a.date || "";
    const db = b.date || "";
    if (da === db) return (b.id || "").localeCompare(a.id || "");
    return db.localeCompare(da);
  });

  if (q) {
    services = services.filter((s) => {
      const { vehicle, customer } = buildServiceDisplayData(s);
      const vNum = (vehicle && vehicle.number) || "";
      const vModel = (vehicle && vehicle.model) || "";
      const cName = (customer && customer.name) || "";
      const cPhone = (customer && customer.phone) || "";
      const date = s.date || "";
      const desc = s.description || "";
      const amount = s.amount != null ? String(s.amount) : "";
      const fields = [vNum, vModel, cName, cPhone, date, desc, amount]
        .join(" ")
        .toLowerCase();
      return fields.includes(q);
    });
  }

  services = services.slice(0, 50);

  listEl.innerHTML = "";
  if (services.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_results");
    listEl.appendChild(div);
    return;
  }

  services.forEach((service) => {
    const { vehicle, customer } = buildServiceDisplayData(service);

    const card = document.createElement("div");
    card.className = "job-card";

    const header = document.createElement("div");
    header.className = "job-header";

    const main = document.createElement("div");
    main.className = "job-main";
    main.textContent =
      (vehicle && vehicle.number) || t("unknown_vehicle");

    const right = document.createElement("div");
    right.className = "job-sub";
    right.textContent = service.date || "";

    header.appendChild(main);
    header.appendChild(right);

    const sub = document.createElement("div");
    sub.className = "job-sub";
    const nameParts = [];
    if (customer && customer.name) nameParts.push(customer.name);
    if (customer && customer.phone) nameParts.push(customer.phone);
    sub.textContent = nameParts.join(" • ");

    const foot = document.createElement("div");
    foot.className = "job-foot";
    const desc = service.description || "";
    const amt =
      service.amount != null && service.amount !== ""
        ? t("amount_prefix") + service.amount
        : "";
    foot.textContent = [desc, amt].filter(Boolean).join(" • ");

    card.appendChild(header);
    card.appendChild(sub);
    card.appendChild(foot);

    card.addEventListener("click", () => {
      showBill(service.id);
    });

    listEl.appendChild(card);
  });
}

function showBill(serviceId) {
  const service = state.services.find((s) => s.id === serviceId);
  if (!service) return;

  const { vehicle, customer } = buildServiceDisplayData(service);
  const billBox = document.getElementById("billingBillBox");
  if (!billBox) return;

  const customerName = (customer && customer.name) || "";
  const customerPhone = (customer && customer.phone) || "";
  const vehicleNumber = (vehicle && vehicle.number) || "";
  const vehicleModel = (vehicle && vehicle.model) || "";
  const date = service.date || "";
  const desc = service.description || "";
  const amount =
    service.amount != null && service.amount !== ""
      ? Number(service.amount)
      : 0;

  billBox.classList.remove("empty-text");
  billBox.removeAttribute("data-t");
  billBox.innerHTML =
    '<div class="bill-line">' +
    '<span class="bill-label">Customer:</span>' +
    "<span> " +
    customerName +
    "</span>" +
    "</div>" +
    '<div class="bill-line">' +
    '<span class="bill-label">Phone:</span>' +
    "<span> " +
    customerPhone +
    "</span>" +
    "</div>" +
    '<div class="bill-line">' +
    '<span class="bill-label">Vehicle:</span>' +
    "<span> " +
    vehicleNumber +
    (vehicleModel ? " • " + vehicleModel : "") +
    "</span>" +
    "</div>" +
    '<div class="bill-line">' +
    '<span class="bill-label">Date:</span>' +
    "<span> " +
    date +
    "</span>" +
    "</div>" +
    '<div class="bill-line">' +
    '<span class="bill-label">Work:</span>' +
    "<span> " +
    desc +
    "</span>" +
    "</div>" +
    '<div class="bill-total">' +
    "Total: " +
    t("amount_prefix") +
    amount.toFixed(2) +
    "</div>";
}

/* ---------- Home recent “people chips” ---------- */

function renderHomeRecentPeople() {
  const container = document.getElementById("homeRecentPeople");
  if (!container) return;

  const services = state.services
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, 12);

  container.innerHTML = "";
  if (services.length === 0) {
    const span = document.createElement("span");
    span.className = "empty-text";
    span.textContent = t("no_customer_history");
    container.appendChild(span);
    return;
  }

  services.forEach((service) => {
    const { vehicle, customer } = buildServiceDisplayData(service);

    const chip = document.createElement("div");
    chip.className = "people-chip";

    const avatar = document.createElement("div");
    avatar.className = "people-avatar";

    const labelText =
      (vehicle && vehicle.number) ||
      (customer && customer.name) ||
      t("unknown_vehicle");

    const firstChar = labelText.trim().charAt(0).toUpperCase() || "?";
    avatar.textContent = firstChar;

    const label = document.createElement("div");
    label.className = "people-label";
    label.textContent = labelText;

    chip.appendChild(avatar);
    chip.appendChild(label);

    chip.addEventListener("click", () => {
      startEditService(service.id);
    });

    container.appendChild(chip);
  });
}

/* ---------- Render all ---------- */

function renderAll() {
  renderCustomersList();
  renderCustomerDetail();
  renderCustomerHistory();
  renderVehicleSelect();
  renderVehicleList();
  renderTodayList();
  renderRemindersList();
  renderBillingJobList();
  renderHomeRecentPeople();
  runGlobalSearch();
}

/* ---------- Events ---------- */

function setupEvents() {
  const langToggle = document.getElementById("langToggleBtn");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = state.currentLang === "en" ? "ta" : "en";
      setLanguage(next);
    });
  }

  // Bottom nav tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      if (!tab) return;
      if (tab === "jobs") resetJobFormToNew();
      showScreen(tab);
      if (tab === "billing") renderBillingJobList();
      if (tab === "reminders") renderRemindersList();
      if (tab === "today") renderTodayList();
    });
  });

  // Home quick actions
  document
    .querySelectorAll("[data-action='openJobForm']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        resetJobFormToNew();
        showScreen("jobs");
      })
    );

  document
    .querySelectorAll("[data-action='openToday']")
    .forEach((el) =>
      el.addEventListener("click", () => showScreen("today"))
    );

  document
    .querySelectorAll("[data-action='openCustomers']")
    .forEach((el) =>
      el.addEventListener("click", () => showScreen("customers"))
    );

  document
    .querySelectorAll("[data-action='openBilling']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        showScreen("billing");
        renderBillingJobList();
      })
    );

  // Forms & searches
  const customerForm = document.getElementById("customerForm");
  if (customerForm) {
    customerForm.addEventListener("submit", handleCustomerFormSubmit);
  }

  const customerSearchInput = document.getElementById("customerSearchInput");
  if (customerSearchInput) {
    customerSearchInput.addEventListener("input", renderCustomersList);
  }

  const vehicleForm = document.getElementById("vehicleForm");
  if (vehicleForm) {
    vehicleForm.addEventListener("submit", handleVehicleFormSubmit);
  }

  const vehicleSearchInput = document.getElementById("vehicleSearchInput");
  if (vehicleSearchInput) {
    vehicleSearchInput.addEventListener("input", renderVehicleList);
  }

  const jobForm = document.getElementById("jobForm");
  if (jobForm) {
    jobForm.addEventListener("submit", handleJobFormSubmit);
  }

  const globalSearchInput = document.getElementById("globalSearchInput");
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", runGlobalSearch);
  }

  const saveCustomerDetailBtn = document.getElementById("customerDetailSaveBtn");
  if (saveCustomerDetailBtn) {
    saveCustomerDetailBtn.addEventListener("click", saveCustomerDetail);
  }

  const addVehicleBtn = document.getElementById("customerDetailAddVehicleBtn");
  if (addVehicleBtn) {
    addVehicleBtn.addEventListener("click", () => {
      renderVehicleSelect();
      const customerId = state.selectedCustomerId;
      const vehicleSelect = document.getElementById("vehicleCustomerSelect");
      if (customerId && vehicleSelect) vehicleSelect.value = customerId;
      showScreen("vehicles");
    });
  }

  const addJobBtn = document.getElementById("customerDetailAddJobBtn");
  if (addJobBtn) {
    addJobBtn.addEventListener("click", () => {
      const customer = state.selectedCustomerId
        ? findCustomerById(state.selectedCustomerId)
        : null;
      resetJobFormToNew();
      if (customer) {
        const nameInput = document.getElementById("jobCustomerNameInput");
        const phoneInput = document.getElementById("jobCustomerPhoneInput");
        if (nameInput) nameInput.value = customer.name || "";
        if (phoneInput) phoneInput.value = customer.phone || "";
      }
      showScreen("jobs");
    });
  }

  const historyBtn = document.getElementById("customerDetailHistoryBtn");
  if (historyBtn) {
    historyBtn.addEventListener("click", () => {
      renderCustomerHistory();
      showScreen("customerHistory");
    });
  }

  const billingSearchInput = document.getElementById("billingJobSearchInput");
  if (billingSearchInput) {
    billingSearchInput.addEventListener("input", renderBillingJobList);
  }

  const printBtn = document.getElementById("billingPrintBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // THEME MUST BE INITIALIZED FIRST
  initTheme();

  updateLangToggleButton();
  applyStaticTranslations();

  const dateInput = document.getElementById("jobDateInput");
  if (dateInput && !dateInput.value) {
    dateInput.value = todayStr();
  }

  setupEvents();
  renderAll();
  showScreen("home");
});
