function skillsMembers() {
    var members = [];
    var skills = [];
    var member = {};
    var skill = {};

    // Member
    member = {
        name: 'John',
        skills: ['JavaScript', 'HTML', 'CSS']
    };
    members.push(member);

    member = {
        name: 'Jane',
        skills: ['Python', 'Django', 'Flask']
    };
    members.push(member);

    // Skill
    skill = {
        name: 'JavaScript',
        description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.'
    };
    skills.push(skill);

    skill = {
        name: 'HTML',
        description: 'HTML is the standard markup language for Web pages.'
    };
    skills.push(skill);

    skill = {
        name: 'CSS',
        description: 'CSS is a language that describes the style of an HTML document.'
    };
    skills.push(skill);

    skill = {
        name: 'Python',
        description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.'
    };
    skills.push(skill);

    skill = {
        name: 'Django',
        description: 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.'
    };
    skills.push(skill);

    skill = {
        name: 'Flask',
        description: 'Flask is a lightweight WSGI web application framework.'
    };
    skills.push(skill);

    return {
        members: members,
        skills: skills
    };
}