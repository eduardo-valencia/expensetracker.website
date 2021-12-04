function testModelOpens(wrapper) {
  const modalContent = wrapper.find('.modal-content')
  expect(modalContent.exists()).toBe(true)
}

export default testModelOpens
