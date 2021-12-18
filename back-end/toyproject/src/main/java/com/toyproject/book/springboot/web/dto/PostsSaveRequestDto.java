package com.toyproject.book.springboot.web.dto;

import com.toyproject.book.springboot.domain.posts.Posts;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 등록 기능을 위한 dto로 데이터 교환, 변경을 위한 영역 - Request 데이터를 받을 Dto
@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {

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

    @ApiModelProperty(example = "작성자")
    private String author;

    @Builder
    public PostsSaveRequestDto(String title, String description, String link, String contact, String price, String date, String author) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.contact = contact;
        this.date = date;
        this.price = price;
        this.author = author;
    }

    public Posts toEntity() {
        return Posts.builder()
                .title(title)
                .description(description)
                .link(link)
                .contact(contact)
                .date(date)
                .price(price)
                .author(author)
                .build();
    }
}