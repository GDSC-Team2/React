package com.toyproject.book.springboot.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 수정 기능을 위한 dto로 데이터 교환, 변경을 위한 영역 - Request 데이터를 받을 Dto
@Getter
@NoArgsConstructor
public class PostsUpdateRequestDto {

    // PostsSaveRequestDto에서 작성자 뺀 필드 목록
    @ApiModelProperty(example = "글 제목")  // Swagger에 해당 필드가 무엇인지 나타냄
    private String title;

    @ApiModelProperty(example = "글 설명")
    private String description;

    @ApiModelProperty(example = "공구 관련 링크")
    private String link;

    @ApiModelProperty(example = "공구 오픈채팅 링크")
    private String contact;

    @ApiModelProperty(example = "공구 가격")
    private String price;

    @ApiModelProperty(example = "공구 날짜")
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
