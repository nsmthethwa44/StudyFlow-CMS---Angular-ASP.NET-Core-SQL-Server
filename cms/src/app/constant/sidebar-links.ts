export const SidebarLinks = {
  admin: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/admin' },
    {icon: "fa-solid fa-users",  label: 'User Management', path: '/admin/users' },
    {icon: "fa-solid fa-book",  label: 'Courses', path: '/admin/courses' },
  ],
  instructor: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/instructor' },
    {icon: "fa-solid fa-book-open",  label: 'Course Builder', path: '/instructor/course-builder' },
    {icon: "fa-solid fa-users",  label: 'My Students', path: '/instructor/my-students' },
  ],
  student: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/student' },
    {icon: "fa-solid fa-swatchbook",  label: 'Catalog', path: '/student/catalog' },
    {icon: "fa-solid fa-book",  label: 'Enrolled Courses', path: '/student/my-courses' },
    {icon: "fa-solid fa-certificate",  label: 'Certificated', path: '/student/certificates' },
    {icon: "fa-solid fa-comments",  label: 'Discussions', path: '/student/discussions' },
  ]
};




