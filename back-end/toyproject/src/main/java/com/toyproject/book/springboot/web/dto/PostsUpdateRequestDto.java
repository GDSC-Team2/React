package com.toyproject.book.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 수정 기능을 위한 dto로 데이터 교환, 변경을 위한 영역 - Request 데이터를 받을 Dto
@Getter
@NoArgsConstructor
public class PostsUpdateRequestDto {
    // PostsSaveRequestDto에서 작성자 뺀 필드 목록
    private String title;
    private String description;
    private String link;
    private String contact;
    private String price;
    private String date;

    @Builder
    public PostsUpdateRequestDto(String title, String description, String link, String contact, String date, String price){
        this.title = title;
        this.description = description;
        this.link = link;
        this.contact = contact;
        this.date = date;
        this.price = price;
    }
}
