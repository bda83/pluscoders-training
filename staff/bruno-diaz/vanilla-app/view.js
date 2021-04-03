function createBackofficeForm(onRegister, onLogin, onSwitch) {

    var backofficeForm = document.createElement('div')
    backofficeForm.classList.add('backofficeAccess')
    
    
    var navListBackofficeForm = document.createElement('ul')
    navListBackofficeForm.classList.add('switchButtons')
    backofficeForm.append(navListBackofficeForm)
    
    var navItemRegister = document.createElement('li')
    navListBackofficeForm.append(navItemRegister)

    var navItemLogin = document.createElement('li')
    navListBackofficeForm.append(navItemLogin)

    var registerLink = createLinkActionBackoffice('Register', navItemRegister, onSwitch)
    registerLink.classList.add('switchButtons__link--active')

    var loginLink = createLinkActionBackoffice('Log in', navItemLogin, onSwitch)


    var formWrapper = document.createElement('div')
    formWrapper.classList.add('backofficeAccess__form')
    backofficeForm.append(formWrapper)

    var feedback = document.createElement('span')
    feedback.classList.add("form__feedback")
    formWrapper.append(feedback)

    
    var registerForm = document.createElement('form')
    registerForm.id = 'registerForm'
    registerForm.classList.add('form')
    formWrapper.append(registerForm)

    createInputBackoffice('Full name', 'text', 'fullname', registerForm)
    createInputBackoffice('E-mail', 'email', 'email', registerForm)
    createInputBackoffice('Password', 'password', 'password', registerForm)

    var submit = document.createElement('button')
    submit.classList.add('backofficeForm__submit')
    submit.innerText = 'Register'
    submit.classList.add('form__button')
    submit.classList.add('form__button--submit')
    registerForm.append(submit)

    registerForm.onsubmit = function (event) {
        event.preventDefault()

        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value

        onRegister(fullname, email, password)
    }


    var loginForm = document.createElement('form')
    loginForm.id = 'loginForm'
    loginForm.classList.add('form')
    loginForm.style.display = 'none'
    formWrapper.append(loginForm)

    createInputBackoffice('E-mail', 'email', 'email', loginForm)
    createInputBackoffice('Password', 'password', 'password', loginForm)

    var submit = document.createElement('button')
    submit.innerText = 'Log in'
    submit.classList.add('form__button')
    submit.classList.add('form__button--submit')
    loginForm.append(submit)

    loginForm.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        onLogin(email, password)
    }

    return backofficeForm
}



// Add a link of backoffice form

function createLinkActionBackoffice(text, where, onSwitch) {
    var element = document.createElement('a')
    element.title = text
    element.href = '#'
    element.innerHTML = text
    element.classList.add('switchButtons__link')
    
    where.append(element)

    element.onclick = onSwitch

    return element
}



// Add a input of backoffice form

function createInputBackoffice(text, type, name, where, placeholder) {
    var width = '300px'

    var elementWrapper = document.createElement('span')
    elementWrapper.classList.add('form__element')
    elementWrapper.style.width = width
    where.append(elementWrapper)

    // if (text === 'New password')
    //     width = '142px'

    var elementLabel = document.createElement('label')
    elementLabel.innerText = text
    elementLabel.for = type
    elementLabel.style.width = width
    elementWrapper.append(elementLabel)

    var element = document.createElement('input')
    element.type = type
    element.name = name
    element.id = name
    element.style.width = width
    element.classList.add('form__element--input')

    if (sessionStorage.token)
        element.placeholder = placeholder

    elementLabel.append(element)
    
    // if (text === 'New password') {     
    //     elementWrapper.style.display = 'flex'
    //     elementWrapper.style.flexFlow = 'row-reverse nowrap'
    //     elementWrapper.style.justifyContent = 'space-between'

    //     var elementLabelNew = document.createElement('label')
    //     elementLabelNew.innerText = 'Password'
    //     elementLabelNew.for = type
    //     elementLabelNew.style.width = width
    //     elementLabelNew.style.margin = '8px 0'
    //     elementWrapper.append(elementLabelNew)

    //     var elementNew = document.createElement('input')
    //     elementNew.type = type
    //     elementNew.name = name
    //     elementNew.id = name
    //     elementNew.style.width = width
    //     elementNew.style.margin = '6px 0'
    //     elementLabelNew.append(elementNew)
    // }

    return elementLabel
}



// Create a header of session

function createHeader(onEditProfile, onLogout) {
    var header = document.createElement('header')
    header.id = 'header'

    var logo = document.createElement('h1')
    logo.innerText = 'logo'
    header.append(logo)

    var accountDropdown = document.createElement('div')
    accountDropdown.classList.add("acountDropdown")
    header.append(accountDropdown)

    var accountNameWrapper = document.createElement('div')
    accountNameWrapper.classList.add("acountDropdown__link")
    accountDropdown.append(accountNameWrapper)

    accountDropdown.onclick = function() {
        var elementOpened = header.querySelector('.acountDropdown__menu--opened')

        if (elementOpened)
            elementOpened.classList.remove("acountDropdown__menu--opened")
        else
            accountMenu.classList.add("acountDropdown__menu--opened")

        var iconOpened = document.querySelector('.fa-opened')

        if (elementOpened)
            iconOpened.classList.remove("fa-opened")
        else
            accountIcon.classList.add("fa-opened")
    }

    var accountName = document.createElement('span')
    accountName.classList.add("acountDropdown__name")
    accountName.innerText = sessionStorage.fullname
    accountNameWrapper.append(accountName)
    
    var accountIcon = document.createElement('i')
    accountIcon.classList.add('fa')
    accountIcon.classList.add('fa-angle-down')
    accountNameWrapper.append(accountIcon)
    
    var accountMenu = document.createElement('ul')
    accountMenu.classList.add("acountDropdown__menu")
    accountDropdown.append(accountMenu)
    
    var accountMenuEdit = document.createElement('li')
    accountMenuEdit.onclick = onEditProfile
    accountMenu.append(accountMenuEdit)

    var accountTextEdit = document.createElement('span')
    accountTextEdit.innerText = 'Edit account'
    accountMenuEdit.append(accountTextEdit)

    var accountIconEdit = document.createElement('i')
    accountIconEdit.classList.add('fa')
    accountIconEdit.classList.add('fa-pencil-square-o')
    accountMenuEdit.append(accountIconEdit)
    
    var accountMenuLogout = document.createElement('li')
    accountMenuLogout.onclick = onLogout
    accountMenu.append(accountMenuLogout)

    var accountTextLogout = document.createElement('span')
    accountTextLogout.innerText = 'Log out'
    accountMenuLogout.append(accountTextLogout)
    
    var accountIconLogout = document.createElement('i')
    accountIconLogout.classList.add('fa')
    accountIconLogout.classList.add('fa-sign-out')
    accountMenuLogout.append(accountIconLogout)

    return header
}



// Create Edit profile form

function createEditProfile(onEditProfile, onLogout) {
    var pagEditProfile = document.createElement('div')

    var header = createHeader(onEditProfile, onLogout)
    pagEditProfile.append(header)
    
    var editProfileForm = document.createElement('div')
    editProfileForm.style.padding = '24px 0 16px'
    pagEditProfile.append(editProfileForm)

    var editForm = document.createElement('form')
    editForm.classList.add('form')
    editProfileForm.append(editForm)

    createInputBackoffice('Full name', 'text', 'fullname', editForm, sessionStorage.fullname)
    createInputBackoffice('E-mail', 'email', 'email', editForm, sessionStorage.email)
    // createInputBackoffice('New password', 'password', 'password', editForm, '')

    var submit = document.createElement('button')
    submit.classList.add('form__button')
    submit.classList.add('form__button--submit')
    submit.innerText = 'Save'
    editForm.append(submit)

    editForm.onsubmit = function (event) {
        event.preventDefault()

        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value

        onRegister(fullname, email, password)
    }

    return pagEditProfile
}



// Create pag welcome

function createWelcome(onEditProfile, onLogout, onSearch) {
    var pagWelcome = document.createElement('div')

    var header = createHeader(onEditProfile, onLogout)
    pagWelcome.append(header)
    
    var search = createSearch(onSearch);
    pagWelcome.append(search)

    return pagWelcome
}



// Create search component

function createSearch(onSearch) {
    var sectionSearch = document.createElement('section')
    sectionSearch.id = 'searchComponent'
    sectionSearch.classList.add('searchComponent--searching')

    var titleWrapper = document.createElement('div')
    titleWrapper.classList.add('searchComponent__titleWrapper')
    sectionSearch.append(titleWrapper)
    
    var title = document.createElement('h2')
    title.innerText = 'Start to look for all you want'
    title.classList.add('searchComponent__title')
    titleWrapper.append(title)

    var form = document.createElement('form')
    form.classList.add('searchComponent__form')
    sectionSearch.append(form)

    var searchSearchers = document.createElement('select')
    searchSearchers.name = 'searchers'
    searchSearchers.classList.add('searchComponent__select')
    form.append(searchSearchers)

    var searchSearchersAll = document.createElement('option')
    searchSearchersAll.value = 'all'
    searchSearchersAll.innerText = 'All'
    searchSearchers.append(searchSearchersAll)

    var searchSearchersGoogle = document.createElement('option')
    searchSearchersGoogle.value = 'google'
    searchSearchersGoogle.innerText = 'Google'
    searchSearchers.append(searchSearchersGoogle)

    var searchSearchersYahoo = document.createElement('option')
    searchSearchersYahoo.value = 'yahoo'
    searchSearchersYahoo.innerText = 'Yahoo'
    searchSearchers.append(searchSearchersYahoo)

    var searchSearchersBing = document.createElement('option')
    searchSearchersBing.value = 'bing'
    searchSearchersBing.innerText = 'Bing'
    searchSearchers.append(searchSearchersBing)
    
    var searchInput = document.createElement('input')
    searchInput.type = 'text'
    searchInput.name = 'searchInput'
    searchInput.classList.add('searchComponent__input')
    form.append(searchInput)

    var searchSubmit = document.createElement('button')
    searchSubmit.innerText = 'Search'
    searchSubmit.classList.add('searchComponent__submit')
    form.append(searchSubmit)

    
    form.onsubmit = function (event) {
        event.preventDefault()

        var searcher = event.target.searchers.value
        var query = event.target.searchInput.value
        
        onSearch(searcher, query)
    }

    return sectionSearch
}



// loading results component

function setLoading(dimmer) {
    var submitSearchLoading = document.querySelector('.searchComponent__submit')

    var searchComponentLoading = document.getElementById('searchComponent')

    var resultsWrapper = document.getElementById('resultsWrapper')

    if (dimmer === 'start') {
        searchComponentLoading.classList.add('searchComponent--searching')

        submitSearchLoading.innerText = ''
        submitSearchLoading.disabled = true
        
        for (var i = 0; i < 5; i++) {
            var element = document.createElement('span')
            submitSearchLoading.append(element)
        }
        
        if (resultsWrapper) resultsWrapper.style.opacity = '0.3'
        
    } else if (dimmer === 'stop') {
        searchComponentLoading.classList.remove('searchComponent--searching')
        
        submitSearchLoading.innerText = 'search'
        submitSearchLoading.disabled = false

        if (resultsWrapper) resultsWrapper.style.opacity = '1'
    }
}



// Create pag welcome

function createResults(searchResults, page, onPage) {

    var oldResultsWrapper = document.getElementById('resultsWrapper')
    if (oldResultsWrapper)
        oldResultsWrapper.remove()
    
    var resultsWrapper = document.createElement('section')
    resultsWrapper.style.margin = '0 auto'
    resultsWrapper.style.padding = '24px 16px'
    resultsWrapper.style.maxWidth = '1100px'
    resultsWrapper.id = 'resultsWrapper'
    document.body.append(resultsWrapper)

    if (searchResults.length === 0) {

        var noResult = document.createElement('p')
        noResult.innerText = 'No results for this search'
        noResult.style.textAlign = 'center'
        resultsWrapper.append(noResult)

    } else {
    
        var resultsList = document.createElement('ul')
        resultsList.style.padding = '0 16px'
        resultsList.style.listStyleType = 'none'
        resultsWrapper.append(resultsList)

        for (var i = 0; i < searchResults.length; i++) {
            var searchResult = searchResults[i]

            var resultItem = document.createElement('li')
            resultItem.style.margin = '24px 0'
            resultsList.append(resultItem)
            
            var result = document.createElement('a')
            result.href = searchResult.url
            result.target = '_blank'
            resultItem.append(result)
            
            var resultTitle = document.createElement('p')
            resultTitle.innerHTML = searchResult.title
            resultTitle.over = searchResult.title
            resultTitle.style.fontSize = '20px'
            // resultTitle.style.fontWeight = 'bold'
            resultTitle.style.color = 'Teal'
            resultTitle.style.margin = '8px 0'
            resultTitle.classList.add('result__title')
            result.append(resultTitle)

            var resultDescription = document.createElement('p')
            resultDescription.innerHTML = searchResult.preview
            resultDescription.style.fontSize = '14px'
            resultDescription.style.opacity = '.8'
            result.append(resultDescription)
        }
        
        var pagination = document.createElement('ul')
        pagination.id = 'pagination'
        resultsWrapper.append(pagination)

        for (var i = 1; i < 6; i++) {
            var pageWrapper = document.createElement('li')
            pagination.append(pageWrapper)

            var pageLink = document.createElement('a')
            pageLink.classList.add('pagination__page')
            pageLink.href = '#' + i
            pageLink.innerText = i
            pageWrapper.append(pageLink);

            // IIFE: inmediatly... RTFM
            (function(i) {
                pageLink.onclick = function () {    
                    var page = i

                    onPage(page)
                }
            })(i)

            if (i === page)
                pageLink.classList.add('pagination__page--selected')
        }
    }

    return resultsWrapper
}



// loading results component

function createLoading1() {
    var searchComponentLoading = document.getElementById('searchComponent')
    searchComponentLoading.classList.add('searchComponent--searching')

    var submitSearchLoading = document.querySelector('.searchComponent__submit')
    submitSearchLoading.innerText = ''
    submitSearchLoading.classList.add('searchComponent__submit--searching')

    var circle1 = document.createElement('span')
    submitSearchLoading.append(circle1)
    var circle2 = document.createElement('span')
    submitSearchLoading.append(circle2)
    var circle3 = document.createElement('span')
    submitSearchLoading.append(circle3)
    var circle4 = document.createElement('span')
    submitSearchLoading.append(circle4)
    var circle5 = document.createElement('span')
    submitSearchLoading.append(circle5)

    return loading
}