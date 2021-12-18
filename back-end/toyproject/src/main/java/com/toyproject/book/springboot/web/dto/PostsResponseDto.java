package com.toyproject.book.springboot.web.dto;

import com.toyproject.book.springboot.domain.posts.Posts;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

// 조회 기능을 위한 dto로 데이터 교환, 변경을 위한 영역
@Getter
public class PostsResponseDto {

    @ApiModelProperty(example = "글 아이디")  // Swagger에 해당 필드가 무엇인지 나타냄
    private Long id;

    @ApiModelProperty(example = "글 제목")
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

    public PostsResponseDto(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.description = entity.getDescription();
        this.link = entity.getLink();
        this.contact = entity.getContact();
        this.date = entity.getDate();
        this.price = entity.getPrice();
        this.author = entity.getAuthor();
    }
}