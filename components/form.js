import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'



const {createApp} = Vue;
createApp({
    setup(){
        return {v$: useVuelidate()}
    },
    data() {
        return {
            cities: null,
            centers: null,
            center_disable: true,
            thankyou: false,
            errors: [],
            fullname: null,
            phone: null,
            course: '',
            city: '',
            center: '',
            email: ''
        }
    },
    validations(){
         return {
             fullname: { required },
         }
    },
    methods: {
        handleChangeCity(e) {
            if (e.target.value != '') {
                this.center_disable = false;
                let url = 'http://127.0.0.1:5000/get-center-by-city-id';
                axios.post(url, {
                    'city_id': e.target.value
                })
                    .then(response => (
                        this.centers = JSON.parse(response.data.data)
                    )).catch(err => (
                    console.log(err)
                ));
            } else {
                document.querySelector('#center-handle').value('');
                this.center_disable = true;
            }
        },
        formSubmit: function (e) {
            this.errors = [];

            if (!this.fullname) {
                this.errors.push("Vui lòng nhập Tên.");
            }
            if (!this.email) {
                this.errors.push('Vui lòng nhập Email.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Sai định dạng Email.');
            }
            if (!this.phone) {
                this.errors.push('Vui lòng nhập số điện thoại')
            }
            if (!this.course) {
                this.errors.push("Vui lòng chọn khoá học.");
            }
            if (!this.cities || this.city == '') {
                this.errors.push("Vui lòng chọn Thành Phố.");
            }
            if (!this.centers || this.center == '') {
                this.errors.push("Vui lòng chọn Trung tâm.");
            }

            if (!this.errors.length) {
                axios.post('http://127.0.0.1:5000/submit-register', {
                    params: {
                        'fullname': this.fullname,
                        'email': this.email,
                        'phone': this.phone,
                        'id_city': this.city,
                        'id_center': this.center,
                        'id_program': this.course,
                        'register_page': true
                    }
                })
                    .then(function (response) {
                        if (response.data.error) {
                            console.log(response.data);
                        }
                    }).catch(error => (
                    console.log(error)
                ));
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
    mounted() {
        axios.post('http://127.0.0.1:5000/get-all-city')
            .then(response => (
                this.cities = JSON.parse(response.data.data)
            ));
    }
}).mount('#vue-form')