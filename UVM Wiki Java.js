// JavaScript Document

 const categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.addEventListener('mouseover', function() {
            category.querySelector('.subcategory').style.display = 'block';
        });
        category.addEventListener('mouseout', function() {
            category.querySelector('.subcategory').style.display = 'none';
        });
        category.addEventListener('click', function() {
            const subcategory = category.querySelector('.subcategory');
            subcategory.style.display = subcategory.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Listas en negritas antes de los dos puntos
    const listItems = document.querySelectorAll('ul li, ol li');
    listItems.forEach(function(item) {
        const parts = item.innerHTML.split(':');
        if (parts.length > 1) {
            item.innerHTML = `<strong>${parts[0]}:</strong>${parts.slice(1).join(':')}`;
        }
    });

    // Desactivar posición fija al llegar al footer
    window.addEventListener('scroll', function() {
        const sidebar = document.querySelector('.sidebar');
        const gridContainer = document.querySelector('.grid-container');
        const footer = document.querySelector('footer');
        const sidebarRect = sidebar.getBoundingClientRect();
        const gridContainerRect = gridContainer.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        if (sidebarRect.bottom > footerRect.top) {
            sidebar.style.position = 'absolute';
            sidebar.style.bottom = '0';
        } else {
            sidebar.style.position = 'fixed';
            sidebar.style.bottom = 'auto';
        }

        if (gridContainerRect.bottom > footerRect.top) {
            gridContainer.style.position = 'absolute';
            gridContainer.style.bottom = '0';
        } else {
            gridContainer.style.position = 'fixed';
            gridContainer.style.bottom = 'auto';
        }
    });
});
