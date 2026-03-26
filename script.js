  // ------------------- DATA STRUCTURE -------------------
  const STORAGE_KEY = "nine_day_planner_v6_final";

  function getDefaultPlan() {
    return {
      physics: {
        days: [
          { dayId: 1, sessions: [{ time:"Morning (7am-10am)", chapter:"Electrostatics (Charges & Fields, Potential) · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 2, sessions: [{ time:"Morning (7am-10am)", chapter:"Current Electricity (Kirchhoff's laws) · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 3, sessions: [{ time:"Morning (7am-10am)", chapter:"Magnetic Effects & Magnetism (Biot-Savart, Ampere) · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 4, sessions: [{ time:"Morning (7am-10am)", chapter:"Electromagnetic Induction & AC (Reactance, Transformers) · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 5, sessions: [{ time:"Morning (7am-10am)", chapter:"Optics (Ray & Wave) · One-shot + PYQs (Lens Makers, Interference)", lectureDone: false, pyqDone: false }] },
          { dayId: 6, sessions: [{ time:"Morning (7am-10am)", chapter:"Modern Physics (Dual Nature, Atoms, Nuclei) · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 7, sessions: [{ time:"Morning (7am-10am)", chapter:"Semiconductors & Communication · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 8, sessions: [{ time:"Morning (9am-12pm)", chapter:"MOCK TEST: JEE Main 2025 Shift (Full Paper) + Analysis (4pm-6pm)", lectureDone: false, pyqDone: false }] },
          { dayId: 9, sessions: [{ time:"Revision Sprint (Formulas)", chapter:"Physics: Electrostatics, EMI, Modern, Optics · Formula revision", lectureDone: false, pyqDone: false }] }
        ],
        customChapters: []
      },
      chemistry: {
        days: [
          { dayId: 1, sessions: [{ time:"Night (7pm-10pm)", chapter:"Physical: Electrochemistry · One-shot + PYQs (Numerical focus)", lectureDone: false, pyqDone: false }] },
          { dayId: 2, sessions: [{ time:"Night (7pm-10pm)", chapter:"Physical: Chemical Kinetics · One-shot + PYQs (Graphs & Half-life)", lectureDone: false, pyqDone: false }] },
          { dayId: 3, sessions: [{ time:"Night (7pm-10pm)", chapter:"Inorganic: p-Block (Groups 15-18) · One-shot + PYQs (Exceptions)", lectureDone: false, pyqDone: false }] },
          { dayId: 4, sessions: [{ time:"Night (7pm-10pm)", chapter:"Physical: Solutions · One-shot + PYQs (Colligative Properties)", lectureDone: false, pyqDone: false }] },
          { dayId: 5, sessions: [{ time:"Night (7pm-10pm)", chapter:"Inorganic: Coordination Compounds · One-shot + PYQs (CFT, Isomerism)", lectureDone: false, pyqDone: false }] },
          { dayId: 6, sessions: [{ time:"Night (7pm-10pm)", chapter:"Organic: Haloalkanes & Haloarenes · One-shot + PYQs (Mechanisms)", lectureDone: false, pyqDone: false }] },
          { dayId: 7, sessions: [{ time:"Night (7pm-10pm)", chapter:"Organic: Alcohols, Phenols & Ethers · One-shot + PYQs (Name reactions)", lectureDone: false, pyqDone: false }] },
          { dayId: 8, sessions: [{ time:"Night (7pm-10pm)", chapter:"Organic: Aldehydes, Ketones & Carboxylic Acids · One-shot + PYQs", lectureDone: false, pyqDone: false }] },
          { dayId: 9, sessions: [{ time:"Revision Sprint", chapter:"Chemistry: Inorganic NCERT lines + Organic Name Reactions", lectureDone: false, pyqDone: false }] }
        ],
        customChapters: []
      },
      maths: {
        days: [
          { dayId: 1, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Calculus: Continuity & Differentiability · PYQs only (High weightage)", lectureDone: false, pyqDone: false }] },
          { dayId: 2, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Calculus: Application of Derivatives (AOD) · PYQs (Maxima/Minima)", lectureDone: false, pyqDone: false }] },
          { dayId: 3, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Calculus: Integrals (Definite & Indefinite) · PYQs (Properties)", lectureDone: false, pyqDone: false }] },
          { dayId: 4, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Calculus: Differential Equations · PYQs (Formation & Solving)", lectureDone: false, pyqDone: false }] },
          { dayId: 5, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Algebra: Matrices & Determinants · PYQs (System of equations)", lectureDone: false, pyqDone: false }] },
          { dayId: 6, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Vector & 3D Geometry · PYQs (Cross product, Plane/Line)", lectureDone: false, pyqDone: false }] },
          { dayId: 7, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Probability & Statistics · PYQs (Bayes theorem)", lectureDone: false, pyqDone: false }] },
          { dayId: 8, sessions: [{ time:"Afternoon (4pm-6pm)", chapter:"Analysis & Revision after Mock Test · Identify weak chapters", lectureDone: false, pyqDone: false }] },
          { dayId: 9, sessions: [{ time:"Revision Sprint", chapter:"Math: Formulas of Integration, 3D Geometry, Matrices", lectureDone: false, pyqDone: false }] }
        ],
        customChapters: []
      }
    };
  }

  let appData = { physics: null, chemistry: null, maths: null };
  let activeSubject = 'physics';

  function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored) {
      try {
        const parsed = JSON.parse(stored);
        if(parsed.physics && parsed.chemistry && parsed.maths) {
          appData = parsed;
          return;
        }
      } catch(e) {}
    }
    const defaultPlan = getDefaultPlan();
    appData = {
      physics: JSON.parse(JSON.stringify(defaultPlan.physics)),
      chemistry: JSON.parse(JSON.stringify(defaultPlan.chemistry)),
      maths: JSON.parse(JSON.stringify(defaultPlan.maths))
    };
    saveData();
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }

  function getSubjectStats(subjectKey) {
    const subj = appData[subjectKey];
    let total = 0, completed = 0;
    for(let day of subj.days) {
      if(day.sessions[0]) {
        total += 2;
        if(day.sessions[0].lectureDone) completed++;
        if(day.sessions[0].pyqDone) completed++;
      }
    }
    for(let cust of subj.customChapters) {
      total += 2;
      if(cust.lectureDone) completed++;
      if(cust.pyqDone) completed++;
    }
    return { total, completed, percent: total === 0 ? 0 : Math.round((completed/total)*100) };
  }

  function getOverallStats() {
    let total = 0, completed = 0;
    for(let sub of ['physics', 'chemistry', 'maths']) {
      const stats = getSubjectStats(sub);
      total += stats.total;
      completed += stats.completed;
    }
    return { total, completed, percent: total === 0 ? 0 : Math.round((completed/total)*100) };
  }

  function updateAllStats() {
    const overall = getOverallStats();
    document.getElementById('globalPercent').innerHTML = `${overall.percent}%`;
    document.getElementById('globalTasks').innerHTML = `${overall.completed}/${overall.total} tasks`;
    
    const subjStats = getSubjectStats(activeSubject);
    const subjectNames = { physics: 'PHYSICS', maths: 'MATHEMATICS', chemistry: 'CHEMISTRY' };
    document.getElementById('activeSubjectLabel').innerHTML = `<i class="fas fa-book-open"></i> ${subjectNames[activeSubject]}`;
    document.getElementById('subjectPercent').innerHTML = `${subjStats.percent}%`;
    document.getElementById('subjectTasks').innerHTML = `${subjStats.completed}/${subjStats.total} tasks`;
    
    updateSubjectProgressBars();
  }

  function updateSubjectProgressBars() {
    ['physics', 'maths', 'chemistry'].forEach(sub => {
      const stats = getSubjectStats(sub);
      const fillElem = document.getElementById(`progress-fill-${sub}`);
      const textElem = document.getElementById(`progress-text-${sub}`);
      if(fillElem) fillElem.style.width = `${stats.percent}%`;
      if(textElem) textElem.innerText = `${stats.percent}% (${stats.completed}/${stats.total} tasks)`;
    });
  }

  function setSessionTask(subject, dayIndex, taskType, isChecked) {
    const day = appData[subject].days[dayIndex];
    if(!day || !day.sessions[0]) return;
    if(taskType === 'lecture') day.sessions[0].lectureDone = isChecked;
    if(taskType === 'pyq') day.sessions[0].pyqDone = isChecked;
    saveData();
    renderCurrentPanel();
    updateAllStats();
  }

  function addCustomChapter(subject, chapterName) {
    if(!chapterName.trim()) return;
    const newChapter = {
      id: Date.now() + '-' + Math.random(),
      name: chapterName.trim().substring(0, 60),
      lectureDone: false,
      pyqDone: false
    };
    appData[subject].customChapters.push(newChapter);
    saveData();
    renderCurrentPanel();
    updateAllStats();
  }

  function toggleCustomTask(subject, chapterId, taskType, isChecked) {
    const chapter = appData[subject].customChapters.find(c => c.id == chapterId);
    if(chapter) {
      if(taskType === 'lecture') chapter.lectureDone = isChecked;
      if(taskType === 'pyq') chapter.pyqDone = isChecked;
      saveData();
      renderCurrentPanel();
      updateAllStats();
    }
  }

  function deleteCustomChapter(subject, chapterId) {
    appData[subject].customChapters = appData[subject].customChapters.filter(c => c.id != chapterId);
    saveData();
    renderCurrentPanel();
    updateAllStats();
  }

  function resetAllCheckboxes() {
    if(confirm("Reset all lecture & PYQ checkboxes? Custom chapters remain.")) {
      for(let sub of ['physics', 'chemistry', 'maths']) {
        for(let day of appData[sub].days) {
          if(day.sessions[0]) {
            day.sessions[0].lectureDone = false;
            day.sessions[0].pyqDone = false;
          }
        }
        for(let cust of appData[sub].customChapters) {
          cust.lectureDone = false;
          cust.pyqDone = false;
        }
      }
      saveData();
      renderCurrentPanel();
      updateAllStats();
    }
  }

  function wipeAllData() {
    if(confirm("⚠️ This will delete ALL progress AND custom chapters for all subjects. Reset to original 9-day plan?")) {
      const defaultPlan = getDefaultPlan();
      appData = {
        physics: JSON.parse(JSON.stringify(defaultPlan.physics)),
        chemistry: JSON.parse(JSON.stringify(defaultPlan.chemistry)),
        maths: JSON.parse(JSON.stringify(defaultPlan.maths))
      };
      saveData();
      renderCurrentPanel();
      updateAllStats();
    }
  }

  function renderCurrentPanel() {
    renderSubjectPanel('physics');
    renderSubjectPanel('maths');
    renderSubjectPanel('chemistry');
    updateAllStats();
  }

  function renderSubjectPanel(subjectKey) {
    const panel = document.getElementById(`${subjectKey}-panel`);
    if(!panel) return;
    const data = appData[subjectKey];
    const stats = getSubjectStats(subjectKey);
    
    let html = `
      <div class="subject-progress-container">
        <div class="subject-progress-fill" id="progress-fill-${subjectKey}" style="width: ${stats.percent}%"></div>
      </div>
      <div class="subject-progress-stats">
        <span><i class="fas fa-chart-simple"></i> Subject Progress</span>
        <span class="subject-progress-text" id="progress-text-${subjectKey}">${stats.percent}% (${stats.completed}/${stats.total} tasks)</span>
      </div>
      <div class="days-grid">
    `;
    
    for(let i=0; i<data.days.length; i++) {
      const day = data.days[i];
      const session = day.sessions[0];
      const dayNum = day.dayId;
      const lectureChecked = session.lectureDone ? 'checked' : '';
      const pyqChecked = session.pyqDone ? 'checked' : '';
      const timeSlot = session.time;
      html += `
        <div class="day-card" data-dayidx="${i}">
          <div class="day-header" onclick="toggleDay(this)">
            <div class="day-number"><i class="far fa-calendar-alt"></i> Day ${dayNum}</div>
            <div class="day-title"><i class="far fa-clock"></i> ${timeSlot} · ${escapeHtml(session.chapter.substring(0, 80))}</div>
            <div class="day-stats">
              <span>${lectureChecked ? '✓' : '○'} Lecture</span>
              <span>${pyqChecked ? '✓' : '○'} PYQs</span>
            </div>
            <i class="fas fa-chevron-down chevron-icon"></i>
          </div>
          <div class="day-content">
            <div class="session-row">
              <div class="session-time"><i class="fas fa-hourglass-half"></i> ${timeSlot}</div>
              <div class="session-details">
                <div class="chapter-name"><strong>📖 ${escapeHtml(session.chapter)}</strong></div>
                <div class="task-group">
                  <label class="task-item">
                    <input type="checkbox" class="session-lecture" data-subj="${subjectKey}" data-dayidx="${i}" ${lectureChecked}>
                    <span class="lecture-label">🎥 Lecture Completed</span>
                  </label>
                  <label class="task-item">
                    <input type="checkbox" class="session-pyq" data-subj="${subjectKey}" data-dayidx="${i}" ${pyqChecked}>
                    <span class="pyq-label">📝 PYQs Solved</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    
    html += `<div class="add-chapter-area">
      <input type="text" id="custom-input-${subjectKey}" placeholder="➕ Add extra chapter or topic to track..." autocomplete="off">
      <button class="add-custom-btn" data-subj="${subjectKey}"><i class="fas fa-plus-circle"></i> Add Custom</button>
    </div>`;
    
    if(data.customChapters.length) {
      html += `<div class="custom-chapters-list"><strong style="font-size:0.7rem;">📌 Custom Topics:</strong>`;
      for(let cust of data.customChapters) {
        html += `<div class="custom-chips">
          <span><i class="fas fa-bookmark"></i> ${escapeHtml(cust.name)}</span>
          <label><input type="checkbox" class="custom-lecture" data-subj="${subjectKey}" data-id="${cust.id}" ${cust.lectureDone?'checked':''}> Lec</label>
          <label><input type="checkbox" class="custom-pyq" data-subj="${subjectKey}" data-id="${cust.id}" ${cust.pyqDone?'checked':''}> PYQ</label>
          <button class="delete-custom" data-subj="${subjectKey}" data-id="${cust.id}"><i class="fas fa-trash-alt"></i></button>
        </div>`;
      }
      html += `</div>`;
    }
    html += `</div>`;
    panel.innerHTML = html;
    
    // attach events
    panel.querySelectorAll('.session-lecture').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const subj = cb.dataset.subj;
        const dayIdx = parseInt(cb.dataset.dayidx);
        setSessionTask(subj, dayIdx, 'lecture', cb.checked);
      });
    });
    panel.querySelectorAll('.session-pyq').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const subj = cb.dataset.subj;
        const dayIdx = parseInt(cb.dataset.dayidx);
        setSessionTask(subj, dayIdx, 'pyq', cb.checked);
      });
    });
    
    const addBtn = panel.querySelector('.add-custom-btn');
    if(addBtn) {
      addBtn.addEventListener('click', (e) => {
        const subj = addBtn.dataset.subj;
        const inputField = document.getElementById(`custom-input-${subj}`);
        if(inputField && inputField.value.trim()) {
          addCustomChapter(subj, inputField.value);
          inputField.value = '';
        }
      });
    }
    
    panel.querySelectorAll('.custom-lecture').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const subj = cb.dataset.subj;
        const id = cb.dataset.id;
        toggleCustomTask(subj, id, 'lecture', cb.checked);
      });
    });
    panel.querySelectorAll('.custom-pyq').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const subj = cb.dataset.subj;
        const id = cb.dataset.id;
        toggleCustomTask(subj, id, 'pyq', cb.checked);
      });
    });
    panel.querySelectorAll('.delete-custom').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const subj = btn.dataset.subj;
        const id = btn.dataset.id;
        if(confirm('Remove this custom chapter?')) deleteCustomChapter(subj, id);
      });
    });
    
    // Enter key support
    const inputField = document.getElementById(`custom-input-${subjectKey}`);
    if(inputField) {
      inputField.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
          e.preventDefault();
          if(inputField.value.trim()) {
            addCustomChapter(subjectKey, inputField.value);
            inputField.value = '';
          }
        }
      });
    }
  }

  function escapeHtml(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if(m==='&') return '&amp;';
      if(m==='<') return '&lt;';
      if(m==='>') return '&gt;';
      return m;
    });
  }

  window.toggleDay = function(headerElem) {
    const card = headerElem.closest('.day-card');
    if(card) card.classList.toggle('open');
  };

  function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const subject = btn.dataset.subject;
        activeSubject = subject;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.subject-panel').forEach(panel => panel.classList.remove('active-panel'));
        document.getElementById(`${subject}-panel`).classList.add('active-panel');
        updateAllStats();
      });
    });
  }

  function initGlobalBtns() {
    document.getElementById('resetAllProgressBtn').addEventListener('click', resetAllCheckboxes);
    document.getElementById('clearAllDataBtn').addEventListener('click', wipeAllData);
  }

  function init() {
    loadData();
    renderCurrentPanel();
    initTabs();
    initGlobalBtns();
    setTimeout(() => {
      document.querySelectorAll('.day-card').forEach(card => card.classList.add('open'));
    }, 100);
  }
  init();