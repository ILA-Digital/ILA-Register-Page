<section class="banner-form">
    <div class="slider-wrapper">
        <img src="<?php echo base_url(); ?>/front/images/register/main-banner-june.webp" class="img-fluid" alt="">
    </div>
    <div class="from-container">
        <div class="container-section grid-container">
            <div class="form-position">
                <div class="form-wrapper">

                    <div class="above-form">
                        <h2>
                            TRẢI NGHIỆM HỌC THỬ<br/> CHUẨN QUỐC TẾ
                        </h2>
                    </div>
                    <div id="vue-form">
                        <form name="frmregister" class="form-register-page" id="frmregister" action="" method="POST"
                                      class="ila-form clearfix">
                            <input type="hidden" name="hidcourseid" id="hidcourseid"
                                   value="<?php echo !empty($course_id) ? $course_id : '';?>">
                            <input type="hidden" name="hidlevelid" id="hidlevelid"
                                   value="<?php echo !empty($level_id) ? $level_id : '';?>">
                            <input type="hidden" name="hidscheduleid" id="hidscheduleid"
                                   value="<?php echo !empty($schedule_id) ? $schedule_id : '';?>">
                            <div class="form-group">
                                <input name="fullname" id="fullname"
                                       placeholder="<?php echo $this->lang->line('site_student_full_name');?>"
                                       class="form-control">
                                <!-- <div class="col-md-6">
                                  <label for="parent-name"><?php echo $this->lang->line('site_student_last_name');?>*</label>
                                  <input name="last_name" id="last_name" placeholder="Last Name" class=">
                                </div> -->
                            </div>
                            <div class="form-group">
                                <input type="phone" name="phone" id="phone"
                                       placeholder="<?php echo $this->lang->line('site_phone');?>"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="email" name="email_id" id="email_id" placeholder="Email"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <select name="course" id="course" class="form-control">
                                    <option value=""><?php echo $this->lang->line('site_course');?></option>
                                    <?php
        if(!empty($course_list)){
      foreach ($course_list as $course){ ?>
                                    <?php
        switch ($course->id) {
                                    case '14':
                                    $sub_course = $this->lang->line('site_jumpstart_years');
                                    break;
                                    case '13':
                                    $sub_course = $this->lang->line('site_superjuniors_years');
                                    break;
                                    case '15':
                                    $sub_course = $this->lang->line('site_smartteens_years');
                                    break;

                                    case '12':
                                    $sub_course = $this->lang->line('site_global_program');
                                    break;
                                    case '11':
                                    $sub_course = $this->lang->line('site_exam_program');
                                    break;
                                    case '16':
                                    $sub_course = $this->lang->line('site_corp_program');
                                    break;
                                    default:
                                    $sub_course = $this->lang->line('site_global_program');
                                    break;
                                    }
                                    ?>
                                    <option value="<?php echo $course->id; ?>"
                                    <?php echo $course_id == $course->id ? 'selected' :
                                    '';?>><?php echo $course->course_title; ?> (<?php echo $sub_course; ?>
                                    )</option>
                                    <?php } } ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="city" id="city" class="form-control"
                                        onchange="javascript: get_centers(this.value);">
                                    <option value=""><?php echo $this->lang->line('site_city');?></option>
                                    <?php
        if(!empty($city_list)){
          foreach ($city_list as $city){
       ?>
                                    <option value="<?php echo $city->id; ?>"><?php echo $city->city_name;
                                        ?>
                                    </option>
                                    <?php } } ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="center" id="center" class="form-control">
                                    <option value=""><?php echo $this->lang->line('site_find_centers');?>
                                    </option>
                                </select>
                            </div>
                            <div class="form-group text-center">
                                <input type="submit" class="btn large btn-submit" name="btnSubmit"
                                       id="btnSubmit"
                                       value="<?php echo $this->lang->line('site_register_now');?>"/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<section class="section-register-page whychooseILA">
    <div class="container-section">
        <div class="title-section-wrapper">
            <h2>TẠI SAO NÊN CHỌN ILA?</h2>
        </div>
        <div class="whyChooseInternal">
            <div class="each-why">
                <figure>
                    <img src="front/images/register/photo/Headline01.jpg" class="img-fluid" alt="">
                    <figcaption>
                        <h3>CAM KẾT ĐÀO TẠO</h3>
                        <p>ILA đã có hơn 20 năm kinh nghiệm trong lĩnh vực giáo dục, thành công đào tạo hơn
                            1
                            triệu lượt học viên xuất sắc tiếng Anh.</p>
                    </figcaption>
                </figure>
            </div>
            <div class="each-why">
                <figure>
                    <img src="front/images/register/photo/Headline02.jpg" class="img-fluid" alt="">
                    <figcaption>
                        <h3>CHẤT LƯỢNG GIẢNG DẠY</h3>
                        <p>Các khoá học được dẫn dắt bởi 100% giáo viên bản ngữ trình độ cao, sở hữu bằng cấp quốc tế.
</p>
                    </figcaption>
                </figure>
            </div>
            <div class="each-why">
                <figure>
                    <img src="front/images/register/photo/headline03.jpg" class="img-fluid" alt="">
                    <figcaption>
                        <h3>PHƯƠNG PHÁP VƯỢT TRỘI
</h3>
                        <p>Mô hình đào tạo thế kỷ 21 hiện đại, giàu tính thực tiễn và được cập nhật liên tục theo xu hướng thế giới.
</p>
                    </figcaption>
                </figure>
            </div>
            <div class="each-why">
                <figure>
                    <img src="front/images/register/photo/Headline04.jpg" class="img-fluid" alt="">
                    <figcaption>
                        <h3>CHƯƠNG TRÌNH TOÀN DIỆN
</h3>
                        <p>Chương trình học đa dạng phù hợp nhu cầu và độ tuổi, giúp tối ưu lộ trình học lâu dài, tiếp sức chinh phục những giấc mơ lớn.
</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>
<section class="section-register-page leader">
    <div class="container-section">
        <div class="title-section-wrapper">
            <h2>XUẤT SẮC DẪN ĐẦU - KIẾN TẠO TƯƠNG LAI</h2>
        </div>
        <div class="leaderInternal">
            <div class="each-leader grid">
                <figure class="effect-sarah">
                    <img src="front/images/register/photo/Kid.png" class="img-fluid" alt="Tiếng anh trẻ em">
                    <figcaption>
                        <h3>Tiếng anh trẻ em</h3>
                        <a href="https://ila.edu.vn/tieng-anh-tre-em/" target="_blank" class="btn-more">Tìm hiểu thêm</a>
                    </figcaption>
                </figure>
                <a href="https://ila.edu.vn/tieng-anh-tre-em/" target="_blank" class="btn-more">Tìm hiểu thêm</a>
            </div>
            <div class="each-leader grid">
                <figure class="effect-sarah">
                    <img src="front/images/register/photo/Corporate.png" class="img-fluid" alt="Tiếng anh người lớn
">
                    <figcaption>
                        <h3>Tiếng anh người lớn
                        </h3>
                        <a href="https://ila.edu.vn/tieng-anh-giao-tiep-english-adults" target="_blank" class="btn-more">Tìm hiểu thêm</a>
                    </figcaption>
                </figure>
                <a href="https://ila.edu.vn/tieng-anh-giao-tiep-english-adults" target="_blank" class="btn-more">Tìm hiểu thêm</a>
            </div>
            <div class="each-leader grid">
                <figure class="effect-sarah">
                    <img src="front/images/register/photo/PreSchool.png" class="img-fluid"
                         alt="Hệ thống mầm non">
                    <figcaption>
                        <h3>Hệ thống mầm non</h3>
                        <a href="https://ilo.edu.vn" target="_blank" class="btn-more">Tìm hiểu thêm</a>
                    </figcaption>
                </figure>
                <a href="https://ilo.edu.vn" target="_blank" class="btn-more">Tìm hiểu thêm</a>
            </div>
            <div class="each-leader grid">
                <figure class="effect-sarah">
                    <img src="front/images/register/photo/OSC.png" class="img-fluid" alt="Tư vấn du học">
                    <figcaption>
                        <h3>Tư vấn du học</h3>
                        <a href="https://duhoc.ila.edu.vn/tu-van-du-hoc/" target="_blank" class="btn-more">Tìm hiểu thêm</a>
                    </figcaption>
                </figure>
                <a href="https://duhoc.ila.edu.vn/tu-van-du-hoc/" target="_blank" class="btn-more">Tìm hiểu thêm</a>
            </div>
        </div>
    </div>
</section>
<!-- MODAL -->
<div class="modal fade" id="term" tabindex="-1" role="dialog" aria-labelledby="term" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Điều khoản và điều kiện </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="glyphicon glyphicon-remove"></span>
                </button>
            </div>
            <div class="modal-body">
                <p class=text-modal>Khi đồng ý tham gia vào các chương trình học của ILA, chúng tôi xem như người đăng
                    ký đã đọc, tìm hiểu, và chấp nhận các điều khoản và điều kiện của chúng tôi như sau:</p>
                <ul class="list-modal-term">
                    <li>ILA cam kết bảo mật thông tin khách hàng khi đăng ký tham gia các chương trình học của ILA.</li>
                    <li>ILA bảo lưu toàn quyền điều chỉnh hoặc kết thúc các chương trình học bổng và/hoặc ưu đãi tại bất
                        kỳ thời điểm nào mà không cần thông báo trước hoặc chịu trách nhiệm bồi thường bằng tiền mặt
                        hoặc tài sản.
                    </li>
                    <li>ILA bảo lưu quyền không chấp nhận hoặc từ chối người đăng ký có dấu hiệu vi phạm các quy định
                        chương trình (căn cứ theo Thể lệ chương trình hoặc có bất kỳ hành vi nào mà bên tổ chức cho rằng
                        là không phù hợp hoặc không thể chấp nhận).
                    </li>
                    <li>ILA bảo lưu quyền hủy bỏ, sửa đổi và/hoặc điều chỉnh toàn bộ hoặc một phần bất kì các điều kiện
                        và điều khoản của chương trình học bổng và/hoặc ưu đãi tại bất kỳ thời điểm nào mà không cần
                        thông báo trước cho người đăng ký.
                    </li>
                    <li>Tất cả những hình ảnh và thông tin của người đăng ký (nếu có) đều thuộc quyền sở hữu hợp pháp
                        của ILA và ILA có toàn quyền sử dụng vô thời hạn cho các mục đích truyền thông.
                    </li>
                    <li>Trong trường hợp xảy ra tranh chấp, quyết định của ILA là quyết định cuối cùng.</li>
                </ul>
            </div>
        </div>
    </div>
</div>