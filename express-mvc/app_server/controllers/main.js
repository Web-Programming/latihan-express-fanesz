const index = (req, res) => {
  res.render('index', { title: 'Express' });
};

const contact = (req, res) => {
  res.render('contact', {
    title: 'Contact',
    name: 'Rendy Pratama',
    email: 'rendypratama752@gmail.com',
  });
};

module.exports = { index, contact };
