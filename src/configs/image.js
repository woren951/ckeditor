export default {
    toolbar: [
        'imageStyle:inline',
        '|',
        'imageStyle:alignLeft',
        'imageStyle:alignCenter',
        'imageStyle:alignRight',
        '|',
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'linkImage',
        '|',
        'resizeImage'
    ],
    upload: {
        panel: {
            items: [ 'insertImageViaUrl' ]
        }
    },
    resizeOptions: [
        {
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
        },
        {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
        },
        {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
        }
    ],
};
