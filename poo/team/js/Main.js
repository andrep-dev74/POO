import Member from "./Member.js";

class Main {
  constructor() {
    this.members = [];
    this.memberList = document.querySelector("#member-list");
    this.departmentFilter = document.querySelector("#department-filter");

    this.departmentFilter.addEventListener("change", () => {
      this.render();
    });
  }

  async init() {
    try {
      const response = await fetch("./data/team.json");

      if (!response.ok) {
        throw new Error("Could not load team members.");
      }

      const memberData = await response.json();
      this.members = memberData.map((data) => new Member(data));

      this.populateDepartmentFilter();
      this.render();
    } catch (error) {
      this.memberList.textContent = error.message;
    }
  }

  populateDepartmentFilter() {
    const departments = [
      ...new Set(this.members.map((member) => member.department))
    ];

    departments.forEach((department) => {
      const option = document.createElement("option");
      option.value = department;
      option.textContent = department;
      this.departmentFilter.append(option);
    });
  }

  render() {
    const selectedDepartment = this.departmentFilter.value;

    const filteredMembers =
      selectedDepartment === "all"
        ? this.members
        : this.members.filter(
            (member) => member.department === selectedDepartment
          );

    this.memberList.replaceChildren();

    filteredMembers.forEach((member) => {
      this.memberList.append(member.render());
    });
  }
}

const app = new Main();
app.init();
