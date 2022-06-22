<template>
    <template v-if="!thankyou_page">
        <form action="" v-on:submit.prevent="formSubmit" class="form-register-page"
              method="post"
              novalidate="true" id="frmregister">
            <input type="hidden" name="hidcourseid" id="hidcourseid" value="">
            <input type="hidden" name="hidlevelid" id="hidlevelid" value="">

            <input type="hidden" name="hidscheduleid" id="hidscheduleid" value="">
            <div class="form-group">
                <input :type="'text'" name="fullname" placeholder="Tên học viên (*)" v-model.trim="state.fullname"
                       :class="{'is-invalid': v$.fullname.$error, 'is-valid': !v$.fullname.$invalid && v$.email.$touch(), 'form-control': true}">
                <div class="invalid-feedback" v-if="v$.fullname.$error && v$.fullname.$dirty ">
                    {{ v$.fullname.$errors[0].$message }}
                </div>
            </div>
            <div class="form-group">
                <input :type="'email'" name="email" placeholder="Email" class="form-control" v-model.trim="state.email"
                       :class="{'is-invalid': v$.email.$error, 'is-valid': !v$.email.$invalid && v$.email.$touch(), 'form-control': true}">
                <div class="invalid-feedback" v-if="v$.email.$error && v$.email.$dirty ">
                    {{ v$.email.$errors[0].$message }}
                </div>
            </div>
            <div class="form-group">
                <input type="text" name="phone" placeholder="Số điện thoại (*)"
                       class="form-control" v-model.trim="state.phone"
                       :class="{'is-invalid': v$.phone.$error, 'is-valid': !v$.phone.$invalid && v$.phone.$touch(), 'form-control': true}">
                <div class="invalid-feedback" v-if="v$.phone.$error && v$.phone.$dirty ">
                    {{ v$.phone.$errors[0].$message }}
                </div>
            </div>
            <div class="form-group">
                <select name="course" class="form-control" :class="{'is-invalid':validationStatus(v$.course) }"
                        v-model.trim="state.course">

                    <option value="" selected>Khoá học (*)</option>

                    <option value="14">Jumpstart (Tiếng Anh Trẻ Em từ 3 - 6 tuổi)</option>

                    <option value="13">Super Juniors (Tiếng Anh Thiếu Nhi từ 6 - 11 tuổi)
                    </option>

                    <option value="15">Smart Teens (Tiếng Anh Thiếu Niên từ 11 - 16 tuổi)</option>

                    <option value="12">Global English (Tiếng Anh Giao Tiếp Quốc Tế)</option>

                    <option value="11">IELTS Success (Tiếng Anh Luyện Thi)</option>

                    <option value="16">Corporate English (Tiếng Anh dành cho Doanh Nghiệp)
                    </option>

                </select>
                <div class="invalid-feedback" v-if="v$.course.$error && v$.course.$dirty">
                    {{ v$.course.$errors[0].$message }}
                </div>
            </div>

            <div class="form-group">
                <select name="city" class="form-control" :class="{'is-invalid':validationStatus(v$.city) }"
                        v-on:change="handleChangeCity"
                        v-model="state.city">

                    <option value="" selected>Thành phố (*)</option>

                    <option v-bind:value="item.id" v-for="(item, index) in cities"
                            v-bind:key="index">{{ item.name }}
                    </option>
                </select>
                <div class="invalid-feedback" v-if="v$.city.$error && v$.city.$dirty ">
                    {{ v$.city.$errors[0].$message }}
                </div>
            </div>

            <div class="form-group">
                <select id="center-handle" name="center" class="form-control"
                        :disabled="center_disable" v-model="state.center"
                        :class="{'is-invalid':validationStatus(v$.center) }">

                    <option value="" selected>Tìm trung tâm gần nhất</option>
                    <option v-bind:value="item.id" v-if="centers"
                            v-for="(item, index) in centers"
                            v-bind:key="item.id">{{ item.name_vi }}
                    </option>
                </select>
                <div class="invalid-feedback" v-if="v$.center.$error && v$.center.$dirty ">
                    {{ v$.center.$errors[0].$message }}
                </div>
            </div>

            <div class="form-group text-center">
                <input type="submit" class="btn large btn-submit" name="btnSubmit"
                       id="btnSubmit"
                       value="Đăng ký ngay"/>
            </div>
        </form>
    </template>
    <template v-else>
        <div class="thankyou-page">
            <h2 class="">Đăng ký thành công.</h2>
            <p>Cảm ơn bạn đã đăng ký thông tin. Nhân viên ILA sẽ liên lạc với bạn trong vòng 24h - 48h.</p>
            <p>Xin cảm ơn.</p>
        </div>
    </template>
</template>
<script>
import axios from 'axios';
import {required, email, minLength, maxLength, numeric, helpers} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
import {computed, reactive} from "vue";

export default {
    setup() {
        const state = reactive({
            fullname: '',
            email: '',
            phone: '',
            city: '',
            course: '',
            center: '',
        })

        const rules = computed(function () {
            return {
                fullname: {
                    required: helpers.withMessage('Vui lòng nhập tên học viên', required),
                    minLength: helpers.withMessage('Vui lòng nhập ít nhất 3 ký tự', minLength(3)),
                },
                email: {
                    email: helpers.withMessage('Vui lòng nhập định dạng email', email)
                },
                phone: {
                    required: helpers.withMessage('Vui lòng nhập số điện thoại', required),
                    numeric: helpers.withMessage('Số điện thoại là dạng số', required),
                    minLength: helpers.withMessage('Số điện thoại cần đủ 10 số', minLength(10)),
                    maxLength: helpers.withMessage('Số điện thoại cần đủ 10 số', maxLength(10)),
                },
                city: {
                    required: helpers.withMessage('Vui lòng chọn Thành Phố', required)
                },
                center: {
                    required: helpers.withMessage('Vui lòng chọn Trung tâm ILA', required)
                },
                course: {
                    required: helpers.withMessage('Vui lòng chọn Khoá học', required)
                }
            }
        })

        const v$ = useVuelidate(rules, state)

        return {
            state, v$
        }
    },
    data() {
        return {
            api_url: 'https://api-gateway.ila.edu.vn',
            cities: null,
            centers: null,
            center_disable: true,
            server_error: false,
            server_messages: null,
            thankyou_page: false
        }
    },
    methods: {
        handleChangeCity(e) {
            if (e.target.value != '') {
                this.center_disable = false;
                let url = `${this.api_url}/get-center-by-city-id`;
                axios.post(url, {
                    'city_id': e.target.value
                })
                    .then(response => (
                        this.centers = JSON.parse(response.data.data)
                    )).catch(err => (
                    console.log(err)
                ));
            } else {
                this.center_disable = true;
            }
        },
        formSubmit: function (e) {
            this.v$.$touch();
            if (this.v$.$pending || this.v$.$error) return;
            if (!this.v$.$invalid) {
                axios.post(`${this.api_url}/submit-register`, {
                    params: {
                        'fullname': this.state.fullname,
                        'email': this.state.email,
                        'phone': this.state.phone,
                        'id_city': this.state.city,
                        'id_center': this.state.center,
                        'id_program': this.state.course,
                        'register_page': true
                    },
                    headers: {
                        'Authorization': 'Bearer a5be7d77fa291d9e11f1ce928b169536a1f27fb8a178c1e645a9850a685b0542'
                    }
                })
                    .then(response => {
                        if (response.data.error) {
                            this.server_error = false;
                            return ;
                        }
                        this.thankyou_page = true;
                        return ;
                    })
                    .catch(error => (
                    console.log(error)
                ));
            }
        },
        validationStatus: function (value) {
            return typeof value != 'undefined' ? this.v$.$error : false;
        },
    },
    mounted() {
        axios.post(`${this.api_url}/get-all-city`)
            .then(response => (
                this.cities = JSON.parse(response.data.data)
            ));
    }
}
</script>

<style scoped>

</style>