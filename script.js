const STORAGE_KEY = "krns_workshops app";

const TEXT = {
  en: {
    app_title: "KRNS Workshops app",
    tab_home: "Home",
    tab_customers: "Customers",
    tab_jobs: "Jobs",
    tab_reminders: "Reminders",

    // home search card
    global_search_title: "History search",
    global_search_date_label: "Filter by job date (optional)",
    global_search_placeholder: "Search vehicle no. or customer name",
    global_search_date_placeholder: "dd / mm / yyyy",

    search_placeholder: "Search vehicle no. or customer name", // keep old key
    clear: "Clear",
    no_matching_records: "No matching records",

   home_quick_new_job_title: "Add Job / Service 🧰",
home_quick_new_job_sub: "One tap job entry",

home_quick_customers_title: "Customers 👤",
home_quick_customers_sub: "Add / view customers",

home_quick_today_title: "Today Entry 🗓",
home_quick_today_sub: "Today’s jobs",

home_quick_reminders_title: "Reminders 🔔",
home_quick_reminders_sub: "Next service follow-ups",

home_quick_billing_title: "Billing / Print 🖨️",
home_quick_billing_sub: "Generate bill & print",


    home_today_title: "Today",
    home_reminders_title: "Reminders",
    home_recent_title: "Recent Jobs",
    view_all: "View all",
    home_no_today: "No jobs today",
    home_no_reminders: "No reminders",
    home_no_recent: "No recent jobs",

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

    job_form_title_new: "New Job / Service",
    job_form_title_edit: "Edit Job / Service",
    job_date_label: "Job date*",
    job_vehicle_number_label: "Vehicle number*",
    job_vehicle_model_label: "Vehicle model",
    job_description_label: "Work done / description*",
    job_amount_label: "Amount (₹)",
    job_next_date_label: "Next service date",
    job_customer_name_label: "Customer name",
    job_customer_phone_label: "Customer phone",
    save_job: "Save job",
    update_job: "Update job",
    job_editing_hint: "Editing existing job. Save to update.",
    job_required_warning: "Please fill all required fields.",

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
  },
  ta: {
    app_title: "KRNS வொர்க்ஷாப் app",
    tab_home: "முகப்பு",
    tab_customers: "கஸ்டமர்",
    tab_jobs: "ஜாப்",
    tab_reminders: "ரிமைண்டர்",

    // home search card
    global_search_title: "ஹிஸ்டரி சர்ச்",
    global_search_date_label: "ஜாப் தேதியால் ஃபில்டர் (ஆப்ஷனல்)",
    global_search_placeholder: "வாகன எண் / பெயர் தேடுக",
    global_search_date_placeholder: "dd / mm / yyyy",

    search_placeholder: "வாகன எண் / பெயர் தேடுக",
    clear: "ரிசெட்",
    no_matching_records: "பதிவு இல்லை",

   home_quick_new_job_title: "ஜாப் / சர்வீஸ் சேர்க்க 🧰",
home_quick_new_job_sub: "ஒரே டச் என்ட்ரி",

home_quick_customers_title: "கஸ்டமர்கள் 👤",
home_quick_customers_sub: "சேர்க்க / பார்க்க",

home_quick_today_title: "இன்றைய என்ட்ரி 🗓",
home_quick_today_sub: "இன்றைய ஜாப்கள்",

home_quick_reminders_title: "ரிமைண்டர்கள் 🔔",
home_quick_reminders_sub: "அடுத்த சர்வீஸ் ஃபாலோஅப்",

home_quick_billing_title: "பில்லிங் / பிரிண்ட் 🖨️",
home_quick_billing_sub: "பில் உருவாக்க & பிரிண்ட்",

    home_today_title: "இன்றைய ஜாப்",
    home_reminders_title: "ரிமைண்டர்",
    home_recent_title: "சமீபத்திய ஜாப்",
    view_all: "அனைத்தையும் பார்க்க",
    home_no_today: "இன்று ஜாப் இல்லை",
    home_no_reminders: "ரிமைண்டர் இல்லை",
    home_no_recent: "சமீபத்திய ஜாப் இல்லை",

    customer_form_title: "கஸ்டமர்",
    customer_name_label: "பெயர்*",
    customer_phone_label: "மொபைல்*",
    customer_whatsapp_label: "வாட்ஸ்அப் நம்பர்",
    customer_notes_label: "குறிப்பு",
    save_customer: "கஸ்டமர் சேமிக்க",
    customer_search_placeholder: "பெயர் / மொபைல் தேடுக",
    no_customers: "கஸ்டமர் இல்லை",

    customer_detail_title: "கஸ்டமர் விவரங்கள்",
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
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
    state.vehicles.find((v) => (v.number || "").trim().toUpperCase() === num) ||
    null
  );
}

function normalizePhone(phone) {
  return (phone || "").replace(/\D/g, "");
}

/* ---------- Language Rendering ---------- */
function applyStaticTranslations() {
  document
    .querySelectorAll("[data-t]")
    .forEach((el) => (el.textContent = t(el.getAttribute("data-t"))));

  document.querySelectorAll("[data-t-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-t-placeholder"));
  });

  document.querySelectorAll("[data-t-option]").forEach((opt) => {
    opt.textContent = t(opt.getAttribute("data-t-option"));
  });

  const jobFormTitle = document.getElementById("jobFormTitle");
  const jobFormSubmitBtn = document.getElementById("jobFormSubmitBtn");
  if (state.editingServiceId) {
    jobFormTitle.textContent = t("job_form_title_edit");
    jobFormSubmitBtn.textContent = t("update_job");
  } else {
    jobFormTitle.textContent = t("job_form_title_new");
    jobFormSubmitBtn.textContent = t("save_job");
  }
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
  jobs: "jobs",
  reminders: "reminders",
  today: "jobs",
  vehicles: "customers",
  customerDetail: "customers",
  customerHistory: "customers",
};

function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((sec) => {
    sec.classList.toggle("active", sec.dataset.screen === screenName);
  });

  const rootTab = screenRootMap[screenName] || screenName;
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === rootTab);
  });
}

/* ---------- Rendering helpers ---------- */
function renderAll() {
  renderHomeSections();
  renderCustomersList();
  renderCustomerDetail();
  renderCustomerHistory();
  renderVehicleSelect();
  renderVehicleList();
  renderJobsTodayList();
  renderTodayList();
  renderRemindersList();
  renderGlobalSearchResults();
}

/* Home is just buttons now */
function renderHomeSections() {
  // nothing dynamic on the home screen anymore
}

function buildCustomerVehicles(customerId) {
  return state.vehicles.filter((v) => v.customerId === customerId);
}

function buildCustomerServices(customerId) {
  const vehicles = buildCustomerVehicles(customerId);
  const ids = new Set(vehicles.map((v) => v.id));
  return state.services
    .filter((s) => ids.has(s.vehicleId))
    .slice()
    .sort((a, b) => (a.date || "").localeCompare(b.date || "") * -1);
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
    item.className = "list-item-card clickable";

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
      showScreen("customerDetail");
      renderCustomerDetail();
      renderCustomerHistory();
    });

    list.appendChild(item);
  });
}

function handleCustomerFormSubmit(ev) {
  ev.preventDefault();
  const name = document.getElementById("customerNameInput").value.trim();
  const phone = document.getElementById("customerPhoneInput").value.trim();
  const hasWhatsapp = document.getElementById("customerWhatsappInput").checked;
  const notes = document.getElementById("customerNotesInput").value.trim();

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

  document.getElementById("customerForm").reset();
  document.getElementById("customerWhatsappInput").checked = true;

  renderCustomersList();
  renderVehicleSelect();
}

/* ---------- Customer detail & history ---------- */
function renderCustomerDetail() {
  const id = state.selectedCustomerId;
  const nameEl = document.getElementById("customerDetailName");
  const phoneEl = document.getElementById("customerDetailPhone");
  const notesEl = document.getElementById("customerDetailNotes");
  const vehicleList = document.getElementById("customerDetailVehicleList");

  if (!id) {
    nameEl.textContent = "";
    phoneEl.textContent = "";
    notesEl.textContent = "";
    vehicleList.innerHTML = "";
    return;
  }

  const customer = findCustomerById(id);
  if (!customer) {
    nameEl.textContent = t("unknown_customer");
    phoneEl.textContent = "";
    notesEl.textContent = "";
    vehicleList.innerHTML = "";
    return;
  }

  nameEl.textContent = customer.name || t("unknown_customer");
  phoneEl.textContent = customer.phone || "";
  notesEl.textContent = customer.notes || "";

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
    if (vehicle.type === "bike") type.textContent = t("vehicle_type_bike");
    else if (vehicle.type === "car") type.textContent = t("vehicle_type_car");
    else type.textContent = "";

    header.appendChild(title);
    header.appendChild(type);

    const servicesForVehicle = state.services
      .filter((s) => s.vehicleId === vehicle.id)
      .slice()
      .sort((a, b) => (a.date || "").localeCompare(b.date || "") * -1)
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
        if (service.amount)
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

function renderCustomerHistory() {
  const container = document.getElementById("customerHistoryList");
  const nameEl = document.getElementById("customerHistoryName");
  const phoneEl = document.getElementById("customerHistoryPhone");
  const notesEl = document.getElementById("customerHistoryNotes");

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
    const { vehicle } = buildServiceDisplayData(service);
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
    if (service.amount)
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

  if (currentValue) select.value = currentValue;
}

function renderVehicleList() {
  const list = document.getElementById("vehicleList");
  const searchInput = document.getElementById("vehicleSearchInput");
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
    if (vehicle.type === "bike") type.textContent = t("vehicle_type_bike");
    else if (vehicle.type === "car") type.textContent = t("vehicle_type_car");
    else type.textContent = "";

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
  const customerId = document.getElementById("vehicleCustomerSelect").value;
  const type = document.getElementById("vehicleTypeSelect").value;
  const model = document.getElementById("vehicleModelInput").value.trim();
  const numberRaw = document.getElementById("vehicleNumberInput").value.trim();
  const notes = document.getElementById("vehicleNotesInput").value.trim();

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
  document.getElementById("vehicleForm").reset();
  renderVehicleList();
  renderCustomerDetail();
}

/* ---------- Jobs ---------- */
function resetJobFormToNew() {
  state.editingServiceId = null;
  const form = document.getElementById("jobForm");
  form.reset();
  const dateInput = document.getElementById("jobDateInput");
  dateInput.value = todayStr();

  const modeLabel = document.getElementById("jobFormModeLabel");
  modeLabel.classList.add("hidden");
  modeLabel.textContent = t("job_editing_hint");

  const titleEl = document.getElementById("jobFormTitle");
  const btn = document.getElementById("jobFormSubmitBtn");
  titleEl.textContent = t("job_form_title_new");
  btn.textContent = t("save_job");
}

function startEditService(serviceId) {
  const service = state.services.find((s) => s.id === serviceId);
  if (!service) return;

  state.editingServiceId = serviceId;

  const vehicle = findVehicleById(service.vehicleId);
  const customer =
    vehicle && vehicle.customerId ? findCustomerById(vehicle.customerId) : null;

  document.getElementById("jobDateInput").value =
    service.date || todayStr();
  document.getElementById("jobVehicleNumberInput").value =
    (vehicle && vehicle.number) || "";
  document.getElementById("jobVehicleModelInput").value =
    (vehicle && vehicle.model) || "";
  document.getElementById("jobDescriptionInput").value =
    service.description || "";
  document.getElementById("jobAmountInput").value =
    service.amount != null ? service.amount : "";
  document.getElementById("jobNextDateInput").value = service.nextDate || "";
  document.getElementById("jobCustomerNameInput").value =
    (customer && customer.name) || "";
  document.getElementById("jobCustomerPhoneInput").value =
    (customer && customer.phone) || "";

  const modeLabel = document.getElementById("jobFormModeLabel");
  modeLabel.classList.remove("hidden");
  modeLabel.textContent = t("job_editing_hint");

  const titleEl = document.getElementById("jobFormTitle");
  const btn = document.getElementById("jobFormSubmitBtn");
  titleEl.textContent = t("job_form_title_edit");
  btn.textContent = t("update_job");

  showScreen("jobs");
}

function handleJobFormSubmit(ev) {
  ev.preventDefault();

  const date = document.getElementById("jobDateInput").value;
  const vehicleNumberRaw = document
    .getElementById("jobVehicleNumberInput")
    .value.trim();
  const vehicleModel = document
    .getElementById("jobVehicleModelInput")
    .value.trim();
  const description = document
    .getElementById("jobDescriptionInput")
    .value.trim();
  const amountStr = document.getElementById("jobAmountInput").value.trim();
  const nextDate = document.getElementById("jobNextDateInput").value;
  const customerName = document
    .getElementById("jobCustomerNameInput")
    .value.trim();
  const customerPhoneRaw = document
    .getElementById("jobCustomerPhoneInput")
    .value.trim();

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

/* ---------- Today lists ---------- */
function renderJobsTodayList() {
  const container = document.getElementById("jobsTodayList");
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
    .sort((a, b) => (a.date || "").localeCompare(b.date || "") * -1)
    .forEach((service) => {
      const { vehicle, customer } = buildServiceDisplayData(service);
      const item = document.createElement("div");
      item.className = "list-item-card";

      const header = document.createElement("div");
      header.className = "list-item-header";

      const title = document.createElement("div");
      title.className = "list-item-title";
      title.textContent =
        (vehicle && vehicle.number) || t("unknown_vehicle");

      const right = document.createElement("div");
      right.className = "list-item-sub";
      right.textContent = service.amount
        ? t("amount_prefix") + " " + service.amount
        : "";

      header.appendChild(title);
      header.appendChild(right);

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

function renderTodayList() {
  const container = document.getElementById("todayList");
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
    .sort((a, b) => (a.date || "").localeCompare(b.date || "") * -1)
    .forEach((service) => {
      const { vehicle, customer } = buildServiceDisplayData(service);
      const item = document.createElement("div");
      item.className = "list-item-card";

      const header = document.createElement("div");
      header.className = "list-item-header";

      const title = document.createElement("div");
      title.className = "list-item-title";
      title.textContent =
        (vehicle && vehicle.number) || t("unknown_vehicle");

      const amountEl = document.createElement("div");
      amountEl.className = "list-item-sub";
      amountEl.textContent = service.amount
        ? t("amount_prefix") + " " + service.amount
        : "";

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
    const { vehicle, customer } = buildServiceDisplayData(service);

    const item = document.createElement("div");
    item.className = "list-item-card";

    const header = document.createElement("div");
    header.className = "list-item-header";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent =
      (vehicle && vehicle.number) || t("unknown_vehicle");

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
        const raw = normalizePhone(customer.phone);
if (!raw) return;

// Add country code if missing (here I assume India - 91)
const phone = raw.length <= 10 ? "91" + raw : raw;

const msg =
  `Hello ${customer?.name || ""}, your next service is due for vehicle ` +
  `${vehicle?.number || ""} on ${service?.nextDate || ""}.`;

// More reliable API URL + no popup
const url =
  "https://api.whatsapp.com/send?phone=" +
  phone +
  "&text=" +
  encodeURIComponent(msg);

// Use location change instead of window.open
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

/* ---------- Global Search (History) ---------- */
function renderGlobalSearchResults() {
  const container = document.getElementById("globalSearchResults");
  const q = (document.getElementById("globalSearchInput").value || "")
    .trim()
    .toLowerCase();
  const dateFilter = document.getElementById("globalSearchDate").value;

  if (!q && !dateFilter) {
    container.innerHTML = "";
    return;
  }

  const matches = state.services.filter((service) => {
    const { vehicle, customer } = buildServiceDisplayData(service);
    const vehicleNum = (vehicle && vehicle.number) || "";
    const customerName = (customer && customer.name) || "";
    const matchesText =
      !q ||
      vehicleNum.toLowerCase().includes(q) ||
      customerName.toLowerCase().includes(q);
    const matchesDate = !dateFilter || service.date === dateFilter;
    return matchesText && matchesDate;
  });

  container.innerHTML = "";
  if (matches.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-text";
    div.textContent = t("no_matching_records");
    container.appendChild(div);
    return;
  }

  matches
    .slice()
    .sort((a, b) => (a.date || "").localeCompare(b.date || "") * -1)
    .forEach((service) => {
      const { vehicle, customer } = buildServiceDisplayData(service);
      const card = document.createElement("div");
      card.className = "search-result-card";

      const header = document.createElement("div");
      header.className = "search-result-header";
      const left = document.createElement("div");
      left.textContent =
        (vehicle && vehicle.number) || t("unknown_vehicle");
      const right = document.createElement("div");
      right.textContent = (vehicle && vehicle.model) || "";
      header.appendChild(left);
      header.appendChild(right);

      const main = document.createElement("div");
      main.className = "search-result-main";
      const lines = [];
      if (customer) {
        const namePhone = [];
        if (customer.name) namePhone.push(customer.name);
        if (customer.phone) namePhone.push(customer.phone);
        if (namePhone.length) lines.push(namePhone.join(" • "));
      }
      const dateLine = [];
      if (service.date) dateLine.push(service.date);
      if (service.nextDate) dateLine.push("Next: " + service.nextDate);
      if (dateLine.length) lines.push(dateLine.join(" • "));
      if (service.description) lines.push(service.description);
      if (service.amount)
        lines.push(t("amount_prefix") + " " + service.amount);
      main.textContent = lines.join(" | ");

      const actions = document.createElement("div");
      actions.className = "search-result-actions";
      const btnEdit = document.createElement("button");
      btnEdit.type = "button";
      btnEdit.className = "btn btn-small btn-outline";
      btnEdit.textContent = t("edit_label");
      btnEdit.addEventListener("click", () => startEditService(service.id));

      const btnDelete = document.createElement("button");
      btnDelete.type = "button";
      btnDelete.className = "btn btn-small btn-danger";
      btnDelete.textContent = t("delete_label");
      btnDelete.addEventListener("click", () => {
        const ok = confirm(t("delete_confirm"));
        if (!ok) return;
        const idx = state.services.findIndex((s) => s.id === service.id);
        if (idx >= 0) {
          state.services.splice(idx, 1);
          saveState();
          renderAll();
        }
      });

      actions.appendChild(btnEdit);
      actions.appendChild(btnDelete);

      card.appendChild(header);
      card.appendChild(main);
      card.appendChild(actions);
      container.appendChild(card);
    });
}

/* ---------- Event wiring ---------- */
function setupEvents() {
  const langToggle = document.getElementById("langToggleBtn");
  langToggle.addEventListener("click", () => {
    const next = state.currentLang === "en" ? "ta" : "en";
    setLanguage(next);
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      if (tab === "jobs") {
        resetJobFormToNew();
      }
      showScreen(tab);
    });
  });

  document
    .querySelectorAll("[data-action='openJobForm']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        resetJobFormToNew();
        showScreen("jobs");
      })
    );

  document
    .querySelectorAll("[data-action='openCustomers']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        showScreen("customers");
      })
    );

  document
    .querySelectorAll("[data-action='openToday']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        showScreen("today");
      })
    );

  document
    .querySelectorAll("[data-action='openReminders']")
    .forEach((el) =>
      el.addEventListener("click", () => {
        showScreen("reminders");
      })
    );

  document
    .getElementById("customerForm")
    .addEventListener("submit", handleCustomerFormSubmit);

  document
    .getElementById("customerSearchInput")
    .addEventListener("input", renderCustomersList);

  document
    .getElementById("vehicleForm")
    .addEventListener("submit", handleVehicleFormSubmit);

  document
    .getElementById("vehicleSearchInput")
    .addEventListener("input", renderVehicleList);

  document
    .getElementById("jobForm")
    .addEventListener("submit", handleJobFormSubmit);

  document
    .getElementById("globalSearchInput")
    .addEventListener("input", renderGlobalSearchResults);
  document
    .getElementById("globalSearchDate")
    .addEventListener("change", renderGlobalSearchResults);
  document
    .getElementById("globalSearchClear")
    .addEventListener("click", () => {
      document.getElementById("globalSearchInput").value = "";
      document.getElementById("globalSearchDate").value = "";
      renderGlobalSearchResults();
    });

  // Customer detail buttons
  document
    .getElementById("customerDetailAddVehicleBtn")
    .addEventListener("click", () => {
      renderVehicleSelect();
      const customerId = state.selectedCustomerId;
      if (customerId) {
        document.getElementById("vehicleCustomerSelect").value = customerId;
      }
      showScreen("vehicles");
    });

  document
    .getElementById("customerDetailAddJobBtn")
    .addEventListener("click", () => {
      const customer = state.selectedCustomerId
        ? findCustomerById(state.selectedCustomerId)
        : null;
      resetJobFormToNew();
      if (customer) {
        document.getElementById("jobCustomerNameInput").value =
          customer.name || "";
        document.getElementById("jobCustomerPhoneInput").value =
          customer.phone || "";
      }
      showScreen("jobs");
    });

  document
    .getElementById("customerDetailHistoryBtn")
    .addEventListener("click", () => {
      renderCustomerHistory();
      showScreen("customerHistory");
    });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadState();
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
