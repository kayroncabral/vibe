const User = {
  __resolveType(parent, context, info) {
    if (parent.crm) return 'Doctor'
    if (parent.federalTaxNumber) return 'Patient'

    return null
  }
}

export default User
